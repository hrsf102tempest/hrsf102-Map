import styled, { css } from 'styled-components';
import React, {Component} from 'react';

const MapboxContainer = styled.div`
  padding: 5px;
  background: #fff;
  border: 1px solid #ccc;
  width: 288.44px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 5px;
`

const Mapbox = styled.img`
  width: 286px;
  height: 135px;
  border: solid 1px;
`

const AddressBox = styled.div`
  margin: 5px;
`
const AddressList = styled.ul`
  padding: 5px; 
  margin: 0px;
`
const AddressListItem = styled.li`
  padding: 0px;
  list-style-type: none;
  position: relative
  margin-bottom: 3px;
`

const AddressListIcon = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  display: inline-block; 
  vertical-align: middle; 
  color: #666;
`
const PhoneIcon = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  display: inline-block; 
  vertical-align: middle; 
  transform: scaleX(-1);
  color: #666;
`

const AddressListText = styled.div`
  font-size: 14px;
  margin-left: 30px;
  display: inline-block;
  font-weight: bold;
`
const PhoneNumberText = styled.div`
  font-size: 14px;
  margin-left: 30px;
  display: inline-block;
`
const EditFloat = styled.a`
  float: right;
  margin: 1px 3px;
  font-size: 12px;
  color: #0073bb;
  text-decoration: none; 
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`

const LinkText = styled.a`
  margin: 1px 3px;
  font-size: 14px;
  color: #0073bb;
  text-decoration: none; 
  margin-left: 30px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`



const EditIcon = styled.span`
  margin-right: 4px;
`

const Map = props =>  {

    return (
    <MapboxContainer>
      {/* Google maps requires you to input your credit card to use their api, so i used a picture instead */}
      <Mapbox src="./sf google maps.png" />
      <AddressBox>
        <AddressList>

        <AddressListItem>
          <AddressListIcon className="fas fa-map-marker-alt" />
            <AddressListText>
              670 Bridgeway<br/>
              Sausalito, CA 94965
            </AddressListText>
          <EditFloat><EditIcon className="fas fa-pencil-alt"/>Edit</EditFloat> 
        </AddressListItem>

        <AddressListItem>
          <AddressListIcon className="fas fa-directions" />
            <LinkText>
              Get Directions
            </LinkText>
        </AddressListItem>

        <AddressListItem>
          <PhoneIcon className="fas fa-phone" />
            <PhoneNumberText>
            (415) 332-1454
            </PhoneNumberText>
        </AddressListItem>

        <AddressListItem>
          <AddressListIcon className="fas fa-share-square" />
            <LinkText>
              napavalleyburgercompany.com
            </LinkText>
        </AddressListItem>

        <AddressListItem>
          <AddressListIcon className="fas fa-mobile-alt" />
            <LinkText>
              Send to your Phone
            </LinkText>
        </AddressListItem>
          
        </ AddressList>
      </AddressBox>
    </MapboxContainer>
    );
}

export default Map;