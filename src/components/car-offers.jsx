import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadingContent } from "./general/general-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import data from '../DATA/data.json';

const CarOffers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cars, setCars] = useState(null);
    const [brands, setBrands] = useState({});
    const [models, setModels] = useState({});

    useEffect(() => {
        setIsLoading(true);

        const brandData = {};
        const modelData = {};
        const carData = {};

        data.vehicles.forEach((vehicle, index) => {
            const brandId = `brand_${index}`;
            brandData[brandId] = vehicle.brand;

            Object.entries(vehicle.model).forEach(([modelName, modelDetails], modelIndex) => {
                const modelId = `model_${index}_${modelIndex}`;
                modelData[modelId] = { brandId, name: modelName, buyPrice: modelDetails.currentMarketPrice, price: modelDetails.RentPrice };

                carData[modelId] = {
                    brandId,
                    modelId,
                    image: modelDetails.imageUrl,
                    carCount: 1,
                };
            });
        });

        setBrands(brandData);
        setModels(modelData);
        setCars(carData);
        setIsLoading(false);
    }, []);

    return (
        <div id="car-offers" style={{ clear: "both" }}>
            <Container className="py-4">
                <Row className="mb-5">
                    <Col>
                        <h1 className="fs-1 text-center text-uppercase">La Vida Consulting GmbH: Finde deinen Job</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        !isLoading && cars && brands && models
                        ?
                            Object.entries(cars)
                                .filter(([key, value]) => value.carCount > 0)
                                .map(([key, value]) => {
                                    let brand = brands[value.brandId];
                                    let model = models[value.modelId] ? models[value.modelId].name : "";
                                    let buyPrice = models[value.modelId] ? models[value.modelId].buyPrice : "";
                                    let price = models[value.modelId] ? models[value.modelId].price : "Price Unavailable";
                                    return (
                                        <Col xs={12} sm={6} md={4} className="py-2" key={`offer_${key}`}>
                                            <div style={{
                                                border: '1px solid #ddd',
                                                borderRadius: '5px',
                                                padding: '10px',
                                                minHeight: '450px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                transition: 'transform 0.2s ease-in-out',
                                            }}>
                                                <div style={{
                                                    height: '250px',
                                                    width: '100%',
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '10px',
                                                }}>
                                                    <LazyLoadImage
                                                        src={value.image}
                                                        className="img-fluid"
                                                        effect="blur"
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 style={{
                                                        fontSize: '1.1rem',
                                                        fontWeight: 'bold',
                                                        color: '#333',
                                                        marginBottom: '0.3rem',
                                                    }}>
                                                        {brand} {model}
                                                    </h3>
                                                    <p style={{
    fontSize: '1rem',
    fontWeight: '600',
    color: '#555',
    marginBottom: '1rem',
}}>
<span style={{ fontWeight: 'bold' }}>Kaufen:</span> {buyPrice}
</p>
                                                    <p style={{
                                                        fontSize: '1rem',
                                                        fontWeight: '600',
                                                        color: '#555',
                                                        marginBottom: '1rem',
                                                    }}>
                                             <span style={{ fontWeight: 'bold' }}>Mieten:</span> {price}
                                                    </p>
                                                </div>
                                                <div className="d-grid w-100">
                                                    <Link to={`/cars/${brand}/${model}/${key}`} style={{ textDecoration: 'none' }}>
                                                        <Button
                                                            style={{
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                fontSize: '1rem',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                padding: '10px 0',
                                                                width: '100%',
                                                                fontWeight: 'bold',
                                                            }}
                                                        >
                                                            Kaufen/Mieten
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                        :
                            loadingContent
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CarOffers;
