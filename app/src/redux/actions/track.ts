import axios from 'axios';

import { TrackInterface } from 'src/interfaces/track';

export const FETCH_TRACKS = 'FETCH_TRACKS';
export const CHOOSE_TRACK = 'CHOOSE_TRACK';
export const UPLOAD_TRACK = 'UPLOAD_TRACK';

const BASE_URL = 'http://localhost:3005/api';

export function fetchTracks() {
  const request = axios.get(`${BASE_URL}/tracks/`)
    .then(res => res.data)
    .catch(err => []);

  return {
    type: FETCH_TRACKS,
    payload: request,
  };
}

export function chooseTrack(track: TrackInterface) {
  return {
    type: CHOOSE_TRACK,
    payload: track,
  };
}

export function uploadTrack(name: string, file: File) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('track', file);

  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  const request = axios.post(`${BASE_URL}/tracks/`, formData, config)
    .then(res => ({
      message: 'Envio realizado com sucesso!',
      result: res.data,
      error: false,
    }))
    .catch(err => ({
      message: 'Falha ao realizar envio.',
      result: {},
      error: true,
    }));

  return {
    type: UPLOAD_TRACK,
    payload: request,
  };
}
