package com.GCS.TicketBooking.group.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestBookingSaveDTO {

    private Date date;
    private Double TotalPrice;
    private int userid;
    private List<RequestBookingSaveDetailsDTO> requestBookingSaveDetailsDTOS;

}