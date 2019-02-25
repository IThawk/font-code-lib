function setView(data) {
	$(data.song_list).each(function(index, element) {
		$(".music-list").append('<p>' + element.title + '<span class="play" musicid="' + element.song_id + '" >播放:</span></p>')
	})

	$(".music-list").on("click", "span", function() {
		http.http(config.play + "?mid=" + $(this).attr("musicid"), callback)
	})

	function callback(data) {
		$(".myaudio").attr('src', data.bitrate.file_link);
	}
}

function setView(data) {
	$(data.song_list).each(function(index, element) {
		$(".music-list").append('<p>' + element.title + '<span class="play" musicid="' + element.song_id + '" >播放:</span></p>')
	})

	$(".music-list").on("click", "span", function() {
		http.http(config.play + "?mid=" + $(this).attr("musicid"), callback)
	})

	function callback(data) {
		$(".myaudio").attr('src', data.bitrate.file_link);
	}
}

function setView(data) {
	$(data.song_list).each(function(index, element) {
		$(".music-list").append('<p>' + element.title + '<span class="play" musicid="' + element.song_id + '" >播放:</span></p>')
	})

	$(".music-list").on("click", "span", function() {
		http.http(config.play + "?mid=" + $(this).attr("musicid"), callback)
	})

	function callback(data) {
		$(".myaudio").attr('src', data.bitrate.file_link);
	}
}