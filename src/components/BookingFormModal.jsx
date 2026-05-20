"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function BookingFormModal({ carName }) {
    
  return (
    <Modal>
      <button className="w-full mt-8 bg-black hover:bg-primary duration-300 text-white py-4 rounded-2xl text-lg font-semibold cursor-pointer">
        Book Now
      </button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Booking Form</Modal.Heading>
              <h3>{carName}</h3>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField>
                  <Modal.Footer>
                    <Button className="w-full bg-[#F97316] rounded-xl ">
                      Book Now
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
