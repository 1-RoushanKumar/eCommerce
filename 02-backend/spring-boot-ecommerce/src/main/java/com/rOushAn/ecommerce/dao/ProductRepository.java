package com.rOushAn.ecommerce.dao;

import com.rOushAn.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

//Accept calls from web browser scripts for this orgin.
@CrossOrigin("http//localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
