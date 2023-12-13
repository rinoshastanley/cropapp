import React, { useState, useEffect } from 'react';
import CropCard from './card';

function DashBoard(props) {
    const [data, setData] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cropsPerPage = 10;

    useEffect(() => {
        fetch("https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => {
                setData(data.data || []);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    useEffect(() => {
        // Filter data based on filterText
        const filtered = data.filter(item =>
            item.crop_name.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page on filtering
    }, [filterText, data]);

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const indexOfLastCrop = currentPage * cropsPerPage;
    const indexOfFirstCrop = indexOfLastCrop - cropsPerPage;
    const currentCrops = filteredData.slice(indexOfFirstCrop, indexOfLastCrop);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto mt-4">
            <div className='headers'>
                <input
                    type="text"
                    placeholder="Search by crop name..."
                    value={filterText}
                    onChange={handleFilterChange}
                />
                <button onClick={() => { props.handleLogout(true) }} className='loginButton'>Logout</button>
            </div>

            <div className="row">
                {currentCrops.map((item, index) => (
                    <CropCard
                        key={index}
                        imageArray={item.thumbnails}
                        cropName={item.crop_name}
                    />
                ))}
            </div>
            {/* Pagination */}
            <div>
                {filteredData.length > cropsPerPage && (
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(filteredData.length / cropsPerPage) }).map((_, index) => (
                            <li key={index} className={currentPage === index + 1 ? 'active number' : 'number'}>
                                <button className='number' onClick={() => paginate(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DashBoard;
