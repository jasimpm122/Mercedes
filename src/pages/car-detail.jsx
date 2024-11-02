import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { BsFillCarFrontFill, BsRulers, BsFillCloudHaze2Fill, BsSpeedometer2 } from "react-icons/bs";
import { GiSoundWaves, GiWeight, GiStraightPipe } from "react-icons/gi";
import { GiFuelTank } from "react-icons/gi";
import { MdHeight } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeReservation } from "../redux/features/ReserveSlice";
import data from '../DATA/data.json';
import { loadingContent } from "../components/general/general-components";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

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
                    noiseLevel: modelDetails['Noise level'],
                    tankCapacity: modelDetails['Tank capacity'],
                    width: modelDetails.Width,
                    diggingDepth: modelDetails['Digging depth '],
                    range: modelDetails.Range,
                    length: modelDetails['Length '],
                    transport:modelDetails['Transport width of'],
                    height:modelDetails['Height '],
                    wieght:modelDetails['Weight '],
                    dumbingHieght:modelDetails['Dumping height'],
                    rentprice:modelDetails.RentPrice,
                    price: modelDetails.currentMarketPrice
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

                axios.post('https://cardealers-latest-1.onrender.com/client/enquiry3', payload)
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
    const handleRentNowClick = () => {
        Swal.fire({
            title: 'Jetzt anfragen',
            html:
                `<div style="text-align: left; font-size: 1rem; padding: 10px;">` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="name" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Name</label>
                    <input type="text" id="name" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="emailId" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">E-Mail Adresse</label>
                    <input type="email" id="emailId" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="phoneNumber" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Handy/Festnetznummer</label>
                    <input type="text" id="phoneNumber" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="price" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Preisangebot</label>
                    <input type="text" id="price" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="postalCode" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Postleitzahl</label>
                    <input type="text" id="postalCode" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<h3 style="font-size: 1rem; color: #666; font-weight: 600; margin-top: 20px; text-align: center;">Zeitraum</h3>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="startDate" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Startdatum</label>
                    <input type="text" id="startDate" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `<div style="display: flex; align-items: center; margin-bottom: 15px; flex-wrap: wrap;">
                    <label for="endDate" style="flex: 1 1 30%; min-width: 100px; font-weight: 600; color: #333; margin-right: 10px;">Enddatum</label>
                    <input type="text" id="endDate" class="swal2-input" style="flex: 1 1 65%; min-width: 200px; padding: 8px; font-size: 1rem;">
                </div>` +
    
                `</div>`,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'SENDEN',
            cancelButtonText: 'ABBRECHEN',
            width: window.innerWidth < 600 ? '90%' : '500px',  // 90% for mobile, 500px for desktop
            customClass: {
                popup: 'swal2-custom-popup'  // Optional custom styling class for modal
            },
            didOpen: () => {
                // Initialize Flatpickr for Start and End Dates with mobile-friendly options
                flatpickr("#startDate", {
                    dateFormat: "d-m-Y",
                    minDate: "today",
                    static: window.innerWidth >= 600,  // Fixed position on desktop, overlay on mobile
                });
                flatpickr("#endDate", {
                    dateFormat: "d-m-Y",
                    minDate: "today",
                    static: window.innerWidth >= 600,  // Fixed position on desktop, overlay on mobile
                });
            },
            preConfirm: () => {
                const name = Swal.getPopup().querySelector('#name').value;
                const emailId = Swal.getPopup().querySelector('#emailId').value;
                const phoneNumber = Swal.getPopup().querySelector('#phoneNumber').value;
                const price = Swal.getPopup().querySelector('#price').value;
                const postalCode = Swal.getPopup().querySelector('#postalCode').value;
                const startDate = Swal.getPopup().querySelector('#startDate').value;
                const endDate = Swal.getPopup().querySelector('#endDate').value;
    
                if (!name || !emailId || !phoneNumber || !startDate || !endDate) {
                    Swal.showValidationMessage(`Bitte füllen Sie alle erforderlichen Felder aus`);
                    return null;
                }
                
                return { name, emailId, phoneNumber, price, postalCode, startDate, endDate };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const payload = {
                    name: result.value.name,
                    emailId: result.value.emailId,
                    phoneNumber: result.value.phoneNumber,
                    price: result.value.price,
                    postalCode: result.value.postalCode,
                    startDate: result.value.startDate,
                    endDate: result.value.endDate,
                    type:'Rent',
                    model: `${carBrand} ${carModel}`
                };
    
                axios.post('https://cardealers-latest-1.onrender.com/client/enquiry3', payload)
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
                                        <GiSoundWaves size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Geräuschpegel (dB):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].noiseLevel}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <GiFuelTank size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Tankinhalt (l):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].tankCapacity}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsRulers size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Breite (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].width}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <GiStraightPipe size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Grabtiefe (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].diggingDepth}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsFillCloudHaze2Fill size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Reichweite (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].range}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsRulers size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Länge (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].length}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsRulers size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Transportbreite von (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].transport}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <MdHeight size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Höhe (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].height}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <GiWeight size="2em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Gewicht (kg):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].wieght}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <BsFillCarFrontFill size="2em" className="me-2" style={{ marginTop: "-10px" }} />
                                        <span className="fs-6">Schütthöhe (mm):</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].dumbingHieght}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item action>
                                        <FaEuroSign size="1.5em" className="me-2" style={{ marginTop: "-8px" }} />
                                        <span className="fs-6">Mietpreis:</span> &nbsp;
                                        <span className="fs-5 fw-bold">{cars[carId].rentprice}</span>
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
                                    Jetzt kaufen
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    className="mt-3 w-100 fw-bold"
                                    onClick={handleRentNowClick}
                                    style={{ fontSize: '1.1em' }}
                                >
                                    Jetzt mieten
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
