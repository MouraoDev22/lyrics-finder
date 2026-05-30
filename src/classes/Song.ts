import axios from "axios";
import Config from "./Config.js";

class Song {
  static async getLyrics(
    artist: string,
    songTitle: string,
  ): Promise<string | void> {
    const encodedArtist: string = encodeURIComponent(artist);
    const encodedSongTitle: string = encodeURIComponent(songTitle);
    const url = `https://api.lyrics.ovh/v1/${encodedArtist}/${encodedSongTitle}`;

    try {
      const response: { data: { lyrics: string } } = await axios.get(url);
      return response.data.lyrics;
    } catch (error: unknown) {
      Config.treatError(
        error,
        "Error getting lyrics, song was possibly not found: ",
      );
      return;
    }
  }
}

export default Song;
