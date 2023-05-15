package com.GCS.TicketBooking.group.service;

import com.GCS.TicketBooking.group.dto.RequestBookingSaveDTO;
import com.GCS.TicketBooking.group.dto.paginated.paginatedResponseBookingDTO;
import com.GCS.TicketBooking.group.dto.queryinterfaces.ResponseBookingDetailsInterface;
import com.GCS.TicketBooking.group.entity.Booking;
import com.GCS.TicketBooking.group.entity.BookingDeails;
import com.GCS.TicketBooking.group.repository.BookinDetailsRepo;
import com.GCS.TicketBooking.group.repository.BookingRepo;
import com.GCS.TicketBooking.group.repository.PostRepository;
import com.GCS.TicketBooking.group.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookingServiceIMPL implements BookingService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private BookinDetailsRepo bookinDetailsRepo;

    @Autowired
    private PostRepository movieRepo;
    @Autowired
    private UserRepository userRepo;


    @Override
    @Transactional
    public String addBooking(RequestBookingSaveDTO requestBookingSaveDTO) {
        Booking booking = new Booking(

                requestBookingSaveDTO.getDate(),
                requestBookingSaveDTO.getTotalPrice(),
                userRepo.getOne(requestBookingSaveDTO.getUserid())
        );
        bookingRepo.save(booking);

        if (bookingRepo.existsById(booking.getBookingId())){
            List<BookingDeails> bookingDeails=modelMapper.
                    map(requestBookingSaveDTO.getRequestBookingSaveDetailsDTOS(),new TypeToken<List<BookingDeails>>(){
                    }.getType());


            for (int i=0;i<bookingDeails.size();i++){
                bookingDeails.get(i).setBooking_id(booking);
                bookingDeails.get(i).setPostId(movieRepo.getOne(requestBookingSaveDTO.getRequestBookingSaveDetailsDTOS().get(i).getMovie()));
            }
            if (bookingDeails.size()>0){
                bookinDetailsRepo.saveAll(bookingDeails);
            }

        }
        return "Booking saved";
    }



}