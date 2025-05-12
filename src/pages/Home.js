import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-hero d-flex align-items-center justify-content-center text-center text-white">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4"
          >
            Find Your Dream Property with Asset Eye
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lead"
          >
            Trusted real estate solutions for homes and businesses.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
           

            <Button
              style={{
                backgroundColor: "#1e1e1e",
                borderColor: "#f5b700",
                color: "#f5b700",
                 marginRight: '20px'
              }}
              size="lg"
              href="/site"
               className='btn-animated'
            >
              View Sites
            </Button>

             <Button
              style={{
                backgroundColor: "#f5b700",
                borderColor: "#f5b700",
                color: "black",
                marginRight: '20px'
              }}
              size="lg"
              href="/properties"
               className='btn-animated'
            >
              Browse Villa
            </Button>

            <Button
              style={{
                backgroundColor: "#00796b",
                borderColor: "#f5b700",
                color: "white",
                 marginRight: '20px'
              }}
              size="lg"
              href="/flat"
               className='btn-animated'
            >
              View Flats
            </Button>


          </motion.div>
        </Container>
      </div>
    
    </>
  );
};

export default Home;
