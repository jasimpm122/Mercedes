import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';
import '../App.css';

function CarItem({ images, title, description, price, km, onSubmitForm }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const [open, setOpen] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailId: "",
        phoneNumber: "",
        price: "",
        km: "",
        model: title
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClickOpen = () => {
        setOpen(true);
        setSuccessMessage('');
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await onSubmitForm(formData);
            setSuccessMessage('Sie werden in Kürze von uns hören');
            setFormData({ name: "", emailId: "", phoneNumber: "", price: "", km: "", model: title });
            setSuccessDialogOpen(true);

            setTimeout(() => {
                setSuccessDialogOpen(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSuccessMessage('There was an error submitting your enquiry. Please try again.');
            setSuccessDialogOpen(true);

            setTimeout(() => {
                setSuccessDialogOpen(false);
            }, 5000);
        } finally {
            handleClose();
        }
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const truncatedDescription = description.slice(0, 200);

    return (
        <div style={{ margin: '20px auto', width: '100%', maxWidth: '1200px', padding: isTabletOrMobile ? '10px' : '20px' }}>
            <Grid container spacing={isMobile ? 2 : 4} direction={isTabletOrMobile ? 'column' : 'row'} alignItems="center">
                <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    {images && images.length > 0 ? (
                        <div className="image-slider" style={{
                            width: isTabletOrMobile ? '100%' : '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <button className="prev" onClick={goToPrevImage} style={{
                                position: 'absolute',
                                left: '10px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer'
                            }}>&lt;</button>
                            <img 
                                src={images[currentImageIndex]} 
                                alt={title} 
                                className="car-image" 
                                style={{ 
                                    width: '100%',
                                    maxWidth: '500px',
                                    height: isMobile ? '200px' : 'auto',
                                    minHeight: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '8px'
                                }} 
                            />
                            <button className="next" onClick={goToNextImage} style={{
                                position: 'absolute',
                                right: '10px',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer'
                            }}>&gt;</button>
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center' }}>No images available.</p>
                    )}
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <div className="car-description" style={{ padding: isTabletOrMobile ? '0 16px' : '0 24px', textAlign: isMobile ? 'center' : 'left' }}>
                        <h3 className='car-title' style={{ fontSize: '1.5rem', margin: '10px 0', color: '#111', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                            {title}
                        </h3>
                        <p className='car-description-text' style={{ fontSize: '1rem', margin: '10px 0', color: '#777', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                            {isTabletOrMobile || showFullDescription ? description : `${truncatedDescription}... `}
                            {!isTabletOrMobile && !showFullDescription && (
                                <span 
                                    onClick={() => setShowFullDescription(true)} 
                                    style={{ color: '#007BFF', cursor: 'pointer', fontWeight: 'bold' }}>
                                    Mehr anzeigen
                                </span>
                            )}
                        </p>
                        <p className='car-description-text' style={{ fontSize: '1rem', color: '#333', fontFamily: 'Arial, sans-serif', marginBottom: '5px' }}>
                            Kilometerstand: {km}
                        </p>
                        <p className='car-description-text' style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
                            Preis: {price}
                        </p>
                        <Grid container justifyContent={isTabletOrMobile ? 'center' : 'flex-start'} spacing={2}>
                            <Grid item xs={10} sm={6} md={4}>
                                <Button sx={{ width: '100%', backgroundColor: 'black', color: 'white', fontSize: isMobile ? '12px' : '16px', padding: '10px' }} variant="contained" onClick={handleClickOpen}>Jetzt anfragen</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            
            {/* Main enquiry dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" sx={{ padding: isMobile ? '10px' : 'auto' }}>
                <DialogTitle>Jetzt anfragen</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ fontSize: isMobile ? '14px' : '16px' }}>Geben Sie Ihre Daten ein, um eine Anfrage zu diesem Auto zu stellen.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="emailId"
                        label="E-Mail Adresse"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={formData.emailId}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phoneNumber"
                        label="Handy/Festnetznummer"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        label="Preisangebot"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="km"
                        label="Kilometerstand"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.km}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Abbrechen</Button>
                    <Button onClick={handleSubmit} color="primary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Senden</Button>
                </DialogActions>
            </Dialog>

            {/* Success message dialog */}
            <Dialog open={successDialogOpen} onClose={() => setSuccessDialogOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Notification</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ color: 'green', fontSize: isMobile ? '14px' : '16px' }}>
                        {successMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSuccessDialogOpen(false)} color="primary" sx={{ fontSize: isMobile ? '12px' : '16px' }}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CarItem;
