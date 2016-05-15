var app = 
{
    playing: false,
    mediaTimer: null,
    mediaObject: null,
    debugMode: window.tinyHippos !== undefined,

    init: function()
	{
        document.addEventListener('deviceready', app.deviceReadyHandler, false);
    },
	
    deviceReadyHandler: function()
	{
        app.updateMedia();
    },
    
    playAudio: function()
    {
        if (!app.isPlaying)
        {
            app.mediaObject.play();
            
            $('#play').attr('src', 'images/pause.png');
            
            app.isPlaying = true;

            //Update media position 100 milisecond
            app.mediaTimer = setInterval
            (
                function()
                {
                    app.mediaObject.getCurrentPosition
                    (
                        function(position)
                        {
                            if (position > -1) $('#audio_position').html(position + ' sec');
                        },
                        function(e)
                        {
                            console.log('Error getting pos = ' + e);
                        }
                    );
                }, 100
            );
        }
        else
        {
            app.mediaObject.pause();
            
            clearInterval(app.mediaTimer);
            
            $('#play').attr('src', 'images/play.png');
            
            app.isPlaying = false; 
        }
    },

    stopAudio: function()
    {
        app.mediaObject.stop();
        
        app.isPlaying = false;
        
        clearInterval(app.mediaTimer);
        
        $('#play').attr('src', 'images/play.png');
        $('#audio_position').html('0.000 sec');
    },
    
    updateMedia: function()
    {
        if (app.mediaObject !== null) app.mediaObject.release(); //Clean up old file.

        //Get the new media file.
//        var yourSelect = $('#playlist');
        
        app.mediaObject = new Media($('#playlist').val(), app.stopAudio, null);
    }   
};

app.init();