import axios from 'axios';
const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId")
export const getPlaylists = async () => {
  
  if(token && userId){
    try {
        const response = await axios.get(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return(response.data);
    } catch (error) {
        console.error('Error:', error);
    }}
};

export const getPlaylistTracks = async (playlistId) => {
  if(token && playlistId){
    try {
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return(response.data);
    } catch (error) {
        console.error('Error:', error);
    }}
}

export const searchTracks = async (searchQuery) => {
  if (token) {
      try {
          const response = await axios.get('https://api.spotify.com/v1/search', {
              params: {
                  q: searchQuery,
                  type: 'track',
                  limit: 20
              },
              headers: { Authorization: `Bearer ${token}` }
              
          });
          return response.data;
      } catch (error) {
          console.error('Error:', error);
      }
  }
};

export const addTracksToPlaylist = async (playlistId, uri) => {
  try {
      const response = await axios.post(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
              uris: uri,
              position: 0
          },
          {
              headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          }
      );
      return response.data;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
};

export const removeTrackFromPlaylist = async (playlistId, uri) => {
  try {
    const response = await axios.delete(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          tracks: [{"uri":uri}],
          snapshot_id: ''
        }
      }
    );
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createPlaylist = async (name, description) => {
  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        name: name,
        description: description,
        public: false
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};