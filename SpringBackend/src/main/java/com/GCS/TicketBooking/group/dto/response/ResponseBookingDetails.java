package com.GCS.TicketBooking.group.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseBookingDetails {
    private String userName;
    private Date date;
    private Double TotalPrice;
}
