package com.example.stockMarket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="User")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int Userid;
  
  @Column
  private String Username; 
  
  @Column
  private String Password;
  
  @Column
  private String UserType;
  
  @Column
  private String Email;
  
  @Column
  private String MobileNumber;
  
  @Column
  private boolean Confirmed;
	
}
