function downloadSong(song , WritetoFile){
    console.log("Song is downloading.......");
    console.log("Song is downloaded successfully.......");
    console.log("your song ===> ", song);
    
    isSongDownloaded = true;
    if(isSongDownloaded){
        WritetoFile(song);
    }else{
        console.log("song is not downloaded");
    }
}

downloadSong("excuses.mp3" , function WritetoFile(song){ ///passing a function as a argument
    console.log("writing to file started........");
    console.log("writing completed.....");
    
    let SongFileName = song + ".txt";
    console.log("your file  ====> " , SongFileName);

    let isfileready = true;
    if(isfileready){
        UploadtoDrive();
    }else{
        console.log("uploading can't done");
    }

    function UploadtoDrive(){
        console.log("uploading to drive started........");
        console.log("uploading completed.....");
        let uploadLink = "https://date/link/spaces" + SongFileName;
        console.log("uploaded link  ===> " , uploadLink );
    }
});