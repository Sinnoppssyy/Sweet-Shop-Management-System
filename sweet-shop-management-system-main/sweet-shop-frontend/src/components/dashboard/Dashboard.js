import React, { useState, useEffect } from 'react';
import sweetService from '../../services/sweetService';
import SweetCard from './SweetCard';
import SearchBar from './SearchBar';
import './Dashboard.css';

function Dashboard({ user }) {
    const [sweets, setSweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        loadSweets();
    }, []);

    const loadSweets = async () => {
        try {
            const data = await sweetService.getAllSweets();
            setSweets(data);
        } catch (err) {
            setError('Failed to load sweets');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (searchParams) => {
        try {
            setLoading(true);
            const data = await sweetService.searchSweets(searchParams);
            setSweets(data);
        } catch (err) {
            setError('Search failed');
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async (id, quantity) => {
        try {
            await sweetService.purchaseSweet(id, quantity);
            loadSweets(); // Reload to show updated stock
            alert('Purchase successful!');
        } catch (err) {
            alert(err.response?.data?.error || 'Purchase failed');
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Sweet Shop, {user.username}!</h1>
            <SearchBar onSearch={handleSearch} />

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading sweets...</div>
            ) : (
                <div className="sweets-grid">
                    {sweets.length === 0 ? (
                        <p>No sweets available</p>
                    ) : (
                        sweets.map((sweet) => (
                            <SweetCard
                                key={sweet.id}
                                sweet={sweet}
                                onPurchase={handlePurchase}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
