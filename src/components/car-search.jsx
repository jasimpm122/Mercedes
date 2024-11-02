import React, { useEffect, useState } from 'react';
import vehiclesData from "../DATA/data.json";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarSearch = () => {
    const [vehicles, setVehicles] = useState([]);
    const [brands, setBrands] = useState([]);
    const [filteredModels, setFilteredModels] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedKey, setSelectedKey] = useState(""); // New state for storing the unique key

    useEffect(() => {
        // Load vehicle data from JSON
        setVehicles(vehiclesData.vehicles);

        // Extract unique brands
        const uniqueBrands = [...new Set(vehiclesData.vehicles.map(vehicle => vehicle.brand))];
        setBrands(uniqueBrands);
    }, []);

    const handleBrandChange = (e) => {
        const brand = e.target.value;
        setSelectedBrand(brand);
        setSelectedModel(""); // Reset model on brand change
        setSelectedKey(""); // Reset key on brand change

        // Filter models based on selected brand
        const brandModels = vehicles
            .filter(vehicle => vehicle.brand === brand)
            .map(vehicle => Object.keys(vehicle.model))
            .flat();
        setFilteredModels(brandModels);
    };

    const handleModelChange = (e) => {
        const model = e.target.value;
        setSelectedModel(model);

        // Find the selected vehicle based on brand and model to generate a unique key
        const vehicleIndex = vehicles.findIndex(vehicle =>
            vehicle.brand === selectedBrand && vehicle.model[model]
        );

        if (vehicleIndex !== -1) {
            const modelIndex = Object.keys(vehicles[vehicleIndex].model).indexOf(model);
            const key = `model_${vehicleIndex}_${modelIndex}`;
            setSelectedKey(key);
        }
    };

    return (
        <div id="car-search" className="pb-1">
            <Container className="py-5">
                <Row>
                    <Col>
                        <h1 className="quinary-color fs-2 p-0 mb-2">Baumaschinen suchen</h1>
                        <p className="quinary-color fs-5 p-0 m-0 mb-5">Wählen Sie Ihre bevorzugte Marke und Modell</p>
                        <Container>
                            <Row>
                                <Col xs={12} md={4} className="my-2">
                                    <Form.Select
                                        size="lg"
                                        value={selectedBrand}
                                        onChange={handleBrandChange}
                                    >
                                        <option value="">Wählen Sie eine Marke</option>
                                        {brands.map(brand => (
                                            <option key={brand} value={brand}>{brand}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col xs={12} md={4} className="my-2">
                                    <Form.Select
                                        size="lg"
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        disabled={!filteredModels.length}
                                    >
                                        <option value="">
                                            {selectedBrand ? "Wählen Sie ein Modell" : "---"}
                                        </option>
                                        {filteredModels.map(model => (
                                            <option key={model} value={model}>{model}</option>
                                        ))}
                                    </Form.Select>
                                </Col>
                                <Col xs={12} md={4} className="my-2">
                                    {selectedModel && selectedKey && (
                                        <Link to={`/cars/${selectedBrand}/${selectedModel}/${selectedKey}`} style={{ textDecoration: 'none' }}>
                                            <Button
                                                variant="primary"
                                                size="lg"
                                                className="search-btn w-100"
                                            >
                                                Details anzeigen
                                            </Button>
                                        </Link>
                                    )}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CarSearch;
