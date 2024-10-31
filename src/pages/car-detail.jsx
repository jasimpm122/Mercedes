import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { BsCarFront, BsFillCarFrontFill, BsFillFuelPumpFill, BsSpeedometer2 } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";
import { FaEuroSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeReservation } from "../redux/features/ReserveSlice";
import data from '../DATA/data.json';
import { loadingContent } from "../components/general/general-components";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';

const CarDetail = () => {
    const dispatch = useDispatch();
    const user = useSelector(({ UserSlice }) => UserSlice.user);
    const { carBrand, carModel, carId } = useParams();
    const navigate = useNavigate();

    const [cars, setCars] = useState(null);
    const [brands, setBrands] = useState(null);
    const [models, setModels] = useState(null);
    const [locations, setLocations] = useState(null);

    const [selectedLocations, setSelectedLocations] = useState({ pickup: "", dropoff: "" });
    const [rentDate, setRentDate] = useState({ start: getDateByInputFormat(), end: getDateByInputFormat(1) });
    const [isReservationTimerEnable, setIsReservationTimerEnable] = useState(true);
    const [reservationTimer, setReservationTimer] = useState(300);

    useEffect(() => {
        const brandData = {};
        const modelData = {};
        const carData = {};

        data.vehicles.forEach((vehicle, index) => {
            const brandId = `brand_${index}`;
            brandData[brandId] = vehicle.brand;

            Object.entries(vehicle.model).forEach(([modelName, modelDetails], modelIndex) => {
                const modelId = `model_${index}_${modelIndex}`;
                modelData[modelId] = { brandId, name: modelName };

                carData[modelId] = {
                    brandId,
                    modelId,
                    images: modelDetails.viewImages || [],
                    carCount: 1,
                    power: modelDetails.power,
                    engineSize: modelDetails.engineSize,
                    gearbox: modelDetails.gearbox,
                    bodyType: modelDetails.bodyType,
                    fuelType: modelDetails.fuelType,
                    km: modelDetails.km || "Nicht verfügbar",
                    price: modelDetails.currentMarketPrice || "Preis nicht verfügbar"
                };
            });
        });

        setBrands(brandData);
        setModels(modelData);
        setCars(carData);
        setLocations(data.locations);

        if (carData[carId]) {
            setIsReservationTimerEnable(carData[carId].carCount > 0);
        } else {
            console.warn(`Auto mit ID ${carId} nicht gefunden.`);
            setIsReservationTimerEnable(false);
        }
    }, [carId]);

    function getDateByInputFormat(dayOffset = 0, date = null) {
        let currentDate = date === null ? new Date() : new Date(date);
        if (dayOffset === 0) return currentDate.toISOString().split('T')[0];
        const offsetDate = new Date(currentDate);
        offsetDate.setDate(currentDate.getDate() + dayOffset);
        return offsetDate.toISOString().split('T')[0];
    }

    function timerToString() {
        let minutes = ('0' + Math.floor(reservationTimer / 60)).slice(-2);
        let seconds = ('0' + reservationTimer % 60).slice(-2);
        return `${minutes}:${seconds}`;
    }

    function handleReserveTimeout() {
        Swal.fire({
            title: 'Sie haben die Reservierung nicht abgeschlossen!',
            html: 'Sie werden in <strong>5</strong> Sekunden weitergeleitet',
            timer: 5000,
            didOpen: () => {
                Swal.showLoading();
                const content = Swal.getHtmlContainer();
                const interval = setInterval(() => {
                    content.querySelector('strong').textContent = Math.floor(Swal.getTimerLeft() / 1000);
                }, 100);
                return () => clearInterval(interval);
            },
            willClose: () => {
                navigate("/");
            }
        });
    }

    useEffect(() => {
        if (!isReservationTimerEnable) return;
        if (reservationTimer > 0) {
            setTimeout(() => {
                setReservationTimer(reservationTimer - 1);
            }, 1000);
        } else {
            handleReserveTimeout();
        }
    }, [reservationTimer, isReservationTimerEnable]);

    const handleEnquireNowClick = () => {
        Swal.fire({
            title: 'Jetzt anfragen',
            html:
                `<input type="text" id="name" class="swal2-input" placeholder="Name">` +
                `<input type="email" id="emailId" class="swal2-input" placeholder="E-Mail Adresse">` +
                `<input type="text" id="phoneNumber" class="swal2-input" placeholder="Handy/Festnetznummer">` +
                `<input type="text" id="price" class="swal2-input" placeholder="Preisangebot">`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'SENDEN',
            cancelButtonText: 'ABBRECHEN',
            preConfirm: () => {
                const name = Swal.getPopup().querySelector('#name').value;
                const emailId = Swal.getPopup().querySelector('#emailId').value;
                const phoneNumber = Swal.getPopup().querySelector('#phoneNumber').value;
                const price = Swal.getPopup().querySelector('#price').value;

                if (!name || !emailId || !phoneNumber) {
                    Swal.showValidationMessage(`Bitte füllen Sie alle erforderlichen Felder aus`);
                    return null;
                }
                
                return { name, emailId, phoneNumber, price };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const payload = {
                    name: result.value.name,
                    emailId: result.value.emailId,
                    phoneNumber: result.value.phoneNumber,
                    price: result.value.price,
                    model: `${carBrand} ${carModel}`
                };

                axios.post('https://cardealers-latest-1.onrender.com/client/enquiry', payload)
                    .then(() => {
                        Swal.fire('Vielen Dank!', 'Ihre Anfrage wurde erfolgreich gesendet.', 'success');
                    })
                    .catch((error) => {
                        console.error('Fehler beim Senden der Anfrage:', error);
                        Swal.fire('Fehler', 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.', 'error');
                    });
            }
        });
    };

    return (
        <div id="car-detail" style={{ clear: "both" }}>
            <Container className="py-4">
                <Row className="mb-5">
                    <Col>
                        {isReservationTimerEnable && (
                            <h1 className="fs-1 text-center text-uppercase">
                                Schließen Sie Ihre Reservierung in <b>{timerToString()}</b> ab
                            </h1>
                        )}
                    </Col>
                </Row>
                {cars && brands && models && locations ? (
                    <>
                        <Row className="mb-4">
                            <Col xs={12} md={6}>
                                {cars[carId] && cars[carId].images && cars[carId].images.length > 0 ? (
                                    <ImageGallery
                                        items={cars[carId].images.map((image) => ({
                                            original: image,
                                            thumbnail: image,
                                        }))}
                                        showPlayButton={false}
                                        showFullscreenButton={false}
                                    />
                                ) : (
                                    <p>Keine Bilder verfügbar</p>
                                )}
                            </Col>
                            <Col xs={12} md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item variant="secondary" action>
                                        <BsFillCarFrontFill size="2em" className="me-2" style={{ marginTop: "-10px" }} />
                                        <span className="fs-6">Marke & Modell:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{`${carBrand} / ${carModel}`}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <TbEngine size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Leistung (PS):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].power}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <PiEngineFill size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Hubraum:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].engineSize}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <TbManualGearbox size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Getriebe:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].gearbox}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsCarFront size="2em" className="me-2" style={{ marginTop: "-10px" }} />
                                        <span className="fs-6">Karosserie:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].bodyType}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsFillFuelPumpFill size="2em" className="me-2" style={{ marginTop: "-10px" }} />
                                        <span className="fs-6">Kraftstoffart:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].fuelType}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsSpeedometer2 size="2em" className="me-2" style={{ marginTop: "-10px" }} />
                                        <span className="fs-6">Kilometer:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].km}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <FaEuroSign size="1.5em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Preis:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].price}</span>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button
                                    variant="outline-primary"
                                    className="mt-3 w-100 fw-bold"
                                    onClick={handleEnquireNowClick}
                                    style={{ fontSize: '1.1em' }}
                                >
                                    Jetzt anfragen
                                </Button>
                            </Col>
                        </Row>
                    </>
                ) : loadingContent}
            </Container>
        </div>
    );
};

export default CarDetail;
