import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../Accordion.css'
import * as images from '../images'
const BsAccordion = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-5 p-3">
      <Accordion.Item eventKey="0" className="item">
        <Accordion.Header>Slots and Compartments</Accordion.Header>
        <Accordion.Body>
        <Accordion defaultActiveKey="0-1">
        <Accordion.Item eventKey="0-1" className="item">
          <Accordion.Header>SD Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.sdSlotImage} alt="SD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.sdSlotImage1} alt="SD Slot" style={{ maxWidth: '50%', height: '90px'}} />
          <img src={images.sdSlotImage2} alt="SD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.sdSlotImageS} alt="SD Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-2">
        <Accordion.Item eventKey="0-2" className="item">
          <Accordion.Header>XQD Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.XQDSlotImage} alt="XQD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.XQDSlotImage1} alt="XQD Slot" style={{ maxWidth: '50%', height: '90px'}} />
          <img src={images.XQDSlotImage2} alt="XQD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.XQDSlotImageS} alt="XQD Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-3">
        <Accordion.Item eventKey="0-3" className="item">
          <Accordion.Header>SXS Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.SXSSlotImage} alt="SXS Slot" style={{ maxWidth: '50%' }} />
          <img src={images.SXSSlotImage1} alt="SXS Slot" style={{ maxWidth: '50%', maxHeight: '90px'}} />
          <img src={images.SXSSlotImage2} alt="SXS Slot" style={{ maxWidth: '50%' }} />
          <img src={images.SXSSlotImageS} alt="SXS Slot" style={{ maxWidth: '50%' }} />
          <img src={images.SXSSlotImageS2} alt="SXS Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-4">
        <Accordion.Item eventKey="0-4" className="item">
          <Accordion.Header>CF Express Type A Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.cfaSlotImage} alt="CF Express Type A Slot" style={{ maxWidth: '50%' }} />
          <img src={images.cfaSlotImage1} alt="CF Express Type A Slot" style={{ maxWidth: '50%', maxHeight: '90px' }} />
          <img src={images.cfaSlotImage2} alt="CF Express Type A Slot" style={{ maxWidth: '50%' }} />
          <img src={images.cfaSlotImageS} alt="CF Express Type A Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-5">
        <Accordion.Item eventKey="0-5" className="item">
          <Accordion.Header>Micro SD Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.mSDSlotImage} alt="Micro SD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.mSDSlotImage1} alt="Micro SD Slot" style={{ maxWidth: '50%', maxHeight: '90px'}} />
          <img src={images.mSDSlotImage2} alt="Micro SD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.mSDSlotImageS} alt="Micro SD Slot" style={{ maxWidth: '50%' }} />
          <img src={images.mSDSlotImageSD} alt="Micro SD Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-6">
        <Accordion.Item eventKey="0-6" className="item">
          <Accordion.Header>Fast Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.cfaSlotImage} alt="Fast Slot" style={{ maxWidth: '50%' }} />
          <img src={images.cfaSlotImage1} alt="Fast Slot" style={{ maxWidth: '50%', maxHeight: '90px'}} />
          <img src={images.cfaSlotImage2} alt="Fast Slot" style={{ maxWidth: '50%' }} />
          <img src={images.cfaSlotImageS} alt="Fast Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-7">
        <Accordion.Item eventKey="0-7" className="item">
          <Accordion.Header>USB Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.usbSlotImage1} alt="USB Slot" style={{ maxWidth: '50%' }} />
          <img src={images.usbSlotImage2} alt="USB Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-8">
        <Accordion.Item eventKey="0-8" className="item">
          <Accordion.Header>USB C Slot</Accordion.Header>
          <Accordion.Body>
          <img src={images.usbcSlotImage} alt="USB C Slot" style={{ maxWidth: '50%' }} />
          <img src={images.usbcSlotImage1} alt="USB C Slot" style={{ maxWidth: '50%' }} />
          <img src={images.usbcSlotImage2} alt="USB C Slot" style={{ maxWidth: '50%' }} />
          <img src={images.usbcSlotImageS} alt="USB C Slot" style={{ maxWidth: '50%' }} />
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-9">
        <Accordion.Item eventKey="0-9" className="item">
          <Accordion.Header>Custom Slot</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0-1">
        <Accordion.Item eventKey="0-1" className="item">
          <Accordion.Header>Custom compartment</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="item">
        <Accordion.Header>Extras</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BsAccordion;