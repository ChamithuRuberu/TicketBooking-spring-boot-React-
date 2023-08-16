package com.GCS.TicketBooking.group.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestBookingSaveDetailsDTO {


    private String MovieName;
    private int Quantity;
    private Double TicketPrice;
    private int SeatNumber;
    private int TheaterNumber;
    private int booking;
    private int movie;
}
