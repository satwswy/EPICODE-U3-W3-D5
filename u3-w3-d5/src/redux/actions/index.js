export const getAlbumAction = (albumId) => {
    return async (dispatch, getState) => {
        let headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
          });
    
          try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
              {
                method: "GET",
                headers,
              }
            );
    
            if (response.ok) {
              let album = await response.json();
              dispatch({
                type: 'GET_ALBUM',
                payload: album,
              })
              dispatch({
                type: 'GET_ALBUM_TRACKS',
                payload: album.tracks.data,
              })

            }
          } catch (exception) {
            console.log(exception);
          }
    }
}