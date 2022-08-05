import React, { useEffect } from 'react';
import { AirportCard } from '../components/AirportCard';
import { AirportFIlter } from '../components/AirportFilter';
import { AirportSearch } from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchAirports } from '../store/actions/airportActions';

export function MainPage() {
  const dispatch = useAppDispatch();
  const { error, loading, airports } = useAppSelector((state) => state.airport);

  useEffect(() => {
    dispatch(fetchAirports());
  }, []);

  return (
    <div className='container mx-auto max-w-[760px] pt-5'>
      <AirportSearch />

      <AirportFIlter />

      {airports.map((airport) => (
        <AirportCard key={airport.id} airport={airport} />
      ))}
    </div>
  );
}
