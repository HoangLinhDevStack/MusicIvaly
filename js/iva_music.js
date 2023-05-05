const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// main
const mainProme = $('.main')

// renderSongs
const bodyPlayList = $('.body__playlist-song')

// loadCurrentSongs 
const cdThumb = $('.siberline__controls-left__thumb')
const nameSong = $('.siberline__controls-left__title > h2')
const nameArtist = $('.siberline__controls-left__title > a')
const audio = $('#audio')

// khởi chạy play and pause audio
const playBtn = $('button.siberline__control-middle__celling-play')

// khởi chạy siberline control
const playerSiberline = $('.siberline__control-middle')

// khởi chạy tiến độ bài hát
const progressRanges = $('.siberline__control-middle__floor-seek__progress')

// khởi chạy thời gian bài hát
const CurrTime = $('.siberline__control-middle__floor-curtime > p')
const AllTime = $('.siberline__control-middle__floor-alltime > p')

// khởi chạy bài hát tiếp theo và lùi bài hát
const nextBtn = $('.siberline__control-middle__celling-next')
const prevBtn = $('.siberline__control-middle__celling-prev')

// Khởi chạy lặp lại bài hát
const repeatBtn = $('.siberline__control-middle__celling-repeat')
// Khởi chạy random bài hát
const randomBtn = $('.siberline__control-middle__celling-random')

// Khởi chạy volume và kick sự kiện âm lượng
const volumeRanges = $('.siberline__control-right__options-volume--progress')
const volumeBtn = $('.btn-volume')

// Khởi tạo love
const btnLove = $('.btn-clicktaglove')

// Button siberline
const buttonBtnSiberLine = $('.btn-siberline')

// open user control
const openUserControl = $('.btn__user')
const openUserTables = $('.header__tables-covers')
const userContainer = $('.header__tables')

const app = {

  indexCurrSong: 0,
  currIndex: 0,
  isPlaying: false,
  isRepeat: false,
  isRandom: false,
  isVolume: false,
  volumeCurr: 1,
 

    songs: [
        {
            name: "2AM - JustaTee feat Big Daddy",
            singer: "JustaTee",
            path: "./js/music/y2mate.com - 2AM  JustaTee  feat Big Daddy Official Audio.mp3",
            image: "./js/img_js/2AM.jfif"
          },
          {
            name: "Chuyện Tình Đôi Ta",
            singer: "Da LAB",
            path: "./js/music/y2mate.com - Chuyện Đôi Ta  Emcee L Da LAB ft Muộii Official MV.mp3",
            image: "./js/img_js/ChuyệnTìnhĐôiTa.jfif"
          },
          
          {
            name: "Mặt Mộc",
            singer: "Phạm Nguyên Ngọc, Vanh, và Ân Nhi",
            path: "./js/music/y2mate.com - MĂT MÔC  Pham Nguyên Ngoc x VAnh x Ân Nhi Original.mp3",
            image: "./js/img_js/MặtMộc.jfif"
          },
  
          {
            name: "Yêu Ai Để Không Phải Khóc",
            singer: "Hương Ly",
            path: "./js/music/y2mate.com - Yêu ai đê không phai khoc.mp3",
            image: "./js/img_js/YÊuaiđểkhôngphảikhóc.jfif"
          },
  
          {
            name: "Yêu Đương Khó Quá",
            singer: "ERIK",
            path: "./js/music/y2mate.com - ERIK  yêu đương khó quá thì CHẠY VỀ KHÓC VỚI ANH  Official Music Video Genshin Impact.mp3",
            image: "./js/img_js/Yêuđươngkhóquá.jfif"
          },
  
          {
            name: "Gió Vẫn Hát",
            singer: "Long Phạm",
            path: "./js/music/y2mate.com - Gió Vẫn Hát  Long Phạm  Acoustic Top Hit.mp3",
            image: "./js/img_js/GIó.jfif"
          },
  
          {
            name: "Có Ai Thương Em",
            singer: "Tóc Tiên",
            path: "./js/music/y2mate.com - Tóc Tiên  CÓ AI THƯƠNG EM NHƯ ANH CATENA ft Touliver Official MV.mp3",
            image: "./js/img_js/Cóaithươngem.jfif"
          },
  
          {
            name: "Thức Giấc",
            singer: "Da LAB",
            path: "./js/music/y2mate.com - Thức Giấc  Da LABLo  Fi Ver by 1 9 6 7 Audio Lyrics.mp3",
            image: "./js/img_js/THứcGiấc.jfif"
          },
  
          {
            name: "Bao Lâu Ta Lại Yêu Một Người",
            singer: "Doãn Hiếu",
            path: "./js/music/y2mate.com - Bao Lâu Ta Lại Yêu Một Người l Doãn Hiếu.mp3",
            image: "./js/img_js/Baolâutalạiyêu1người.jfif"
          },
  
          {
            name: "Nàng Thơ",
            singer: "Hoàng Dũng",
            path: "./js/music/y2mate.com - Nàng Thơ  Hoàng Dũng  Official MV.mp3",
            image: "./js/img_js/Nàngthơ.jfif"
          },
    ],

    

    // hàm render xuất ra màn hình các bài hát
    render: function() {
        const html = this.songs.map((song, index) => {
            return `
            <div class="body__playlist-song__box ${index === this.indexCurrSong ? 'active' : ''}"  data-index='${index}'>
              <div class="body__playlist-song__left">
                  <div class="body__playlist-song__left-thumb__img" style="background-image: url(${song.image});"></div>
                  <div class="body__playlist-song__left-music">
                      <h3 class="body__playlist-song__left-music__name">${song.name}</h3>
                      <p class="body__playlist-song__left-music__author">${song.singer}</p>
                  </div>
              </div>

            <div class="body__playlist-song__right">
                <div class="body__playlist-song__right-options__love">
                    <button class="btn-siberline btn-clicktaglove">
                        <i class="fa-regular fa-heart icon-loveless"></i>
                        <i class="fa-solid fa-heart icon-lovefull"></i>
                    </button>
                </div>

                <div class="body__playlist-song__right-options">
                    <button class="btn-siberline">
                        <i class="fa-solid fa-list"></i>
                    </button>
                </div>
            </div>
        </div>`
      }) 
        bodyPlayList.innerHTML = html.join('')
    },

    // Define a object
    defineProperties: function() {
      Object.defineProperty(this, 'currentSong', {
        get: function() {
          return this.song[this.indexCurrSong]
        },
      })
    },

    // Hàm xử lý các sự kiện
    handleEvents: function() {
     const _this = this 

    //  hàm click play
      playBtn.onclick = function() {
        if(_this.isPlaying) {
          audio.pause()
        } else {
          audio.play()
        }
      }

      // Hàm xử lý ramdom bài hát
      randomBtn.onclick = function() {
        _this.isRandom = !_this.isRandom
        this.classList.toggle('active', _this.isRandom)
      }

      // Hàm xử lý chuyển bài hát 
      nextBtn.onclick = function() {
        if(_this.isRandom) {
          _this.randomSong()
        } else {
          _this.nextSong()
        }
        audio.play()
      }

      // Hàm xử lý lùi bài hát
      prevBtn.onclick = function() {
        if(_this.isRandom) {
          _this.randomSong()
        } else {
          _this.preSong()
        }
        audio.play()
      }

      // hàm xủ lý bật bài hát
      audio.onplay = function() {
        _this.isPlaying = true
        playerSiberline.classList.add('playing')
      }

      // Hàm xử lý bài hát bị pause
      audio.onpause = function() {
        _this.isPlaying = false
        playerSiberline.classList.remove('playing')
      }

      // Hàm xử lý lặp lại bài hát 
      audio.onended = function() {
        if(_this.isRepeat) { 
          audio.play() 
        } else {
          nextBtn.click()
        }
      }
      repeatBtn.onclick = function() {
        _this.isRepeat = !_this.isRepeat
        this.classList.toggle('active', _this.isRepeat)
      }

      // hàm xử lý tiến độ bài hát
     audio.ontimeupdate = function() { // vị trí phát của âm thanh/video đã thay đổi.
        const progressPercent = (this.currentTime / this.duration) * 100

        // tiến độ bài hát
        if(progressPercent >= 0) {
          progressRanges.value = progressPercent
          progressRanges.style.background = `linear-gradient(to right, rgba(155,77,224) ${progressPercent}%, rgba(255,255,255) 0%)`
        }

        // Hiển thị số giây hiện tại của bài hát 
        let currTime_minutes = Math.floor(this.currentTime / 60) 
        let currTime_seconds = Math.floor(this.currentTime - (currTime_minutes * 60))
       
        let currTimeMinutesChange = currTime_minutes < 10 ? `0${currTime_minutes}`: `${currTime_minutes}` 
        let currTimeSecondChange = currTime_seconds < 10 ? `0${currTime_seconds}` : `${currTime_seconds}`

        CurrTime.innerText = `${currTimeMinutesChange}:${currTimeSecondChange}`
      }

      // Hàm xử lý tổng thời gian của bài hát
      audio.ondurationchange = function() { // dữ liệu thời lượng của âm thanh/video đã chỉ định bị thay đổi.
        // Hiển thị tổng số giây của bài hát
        let alltime_minutes = Math.floor(this.duration / 60) 
        let alltime_seconds = Math.floor(this.duration - (alltime_minutes * 60))

        let allTimeMinutesChange = alltime_minutes < 10 ? `0${alltime_minutes}` : `${alltime_minutes}`
        let allTimeSecondsChange = alltime_seconds < 10 ? `0${alltime_seconds}` : `${alltime_seconds}` 

        AllTime.innerText = `${allTimeMinutesChange}:${allTimeSecondsChange}`
      }

    //  Hàm xử lý click sự kiện tiến độ bài hát 
     progressRanges.addEventListener('input', locationSongInput)
     function locationSongInput() {
        const seek = (this.value * audio.duration) / 100
        if(seek > 0) {
          audio.currentTime = seek
        }
        audio.play()
     }

    //  Hàm xử lý âm lượng
    volumeRanges.oninput = function() {
      _this.volumeCurr = this.value / 100
      audio.volume = _this.volumeCurr
      this.style.background = `linear-gradient(to right, rgba(155,77,224) ${this.value}%, rgba(255,255,255) 0%)`
      if(_this.volumeCurr === 0) {
        volumeBtn.classList.add('blocknone')
      } else {
        volumeBtn.classList.remove('blocknone')
      }
    }

    // Hàm xử lý bật tắt âm lượng
    volumeBtn.onclick = function() {
      _this.isVolume = !_this.isVolume
      this.classList.toggle('blocknone', _this.isVolume)

      if(_this.isVolume) {
        audio.volume = 0
        volumeRanges.value = 0
        volumeRanges.style.background = `linear-gradient(to right, rgba(155,77,224) ${volumeRanges.value}%, rgba(255,255,255) 0%)`
      } else {
        audio.volume = _this.volumeCurr
        volumeRanges.value = _this.volumeCurr * 100
        volumeRanges.style.background = `linear-gradient(to right, rgba(155,77,224) ${volumeRanges.value}%, rgba(255,255,255) 0%)`
      }
    }

    // Hàm xưa lý click danh sách bài hát 
    //! fixed me
    bodyPlayList.addEventListener("click", listClickSongs)
    function listClickSongs(e) {
      const listNode =  e.target.closest('.body__playlist-song__box:not(.active)')
      const btnLoveInList = e.target.closest('.btn-clicktaglove')
      const listOptions = e.target.closest('.body__playlist-song__right-options')

      if(listNode || listOptions || btnLoveInList) {
        if(listNode && !listOptions && !btnLoveInList) {
          _this.indexCurrSong = parseInt(listNode.dataset.index)
          _this.loadCurrentSongs()
          audio.play()
        } 
  
        if(_this.loadCurrentSongs) {
          btnLoveInList.classList.add('activelove')
          btnLove.classList.add('activelove')
          
        }

        if(listOptions) {
          //todo add me
        }
  
      }

        
       
      }
    
    // Hàm xử lý yêu thích bài hát
    // btnLove.onclick = function() {
    //   btnLove.classList.toggle('activelove')
    // }


    // Hàm xử lý control user
      function hideUserControlEvent() {
        openUserTables.classList.remove('header__tables-open')
      }
      
      function openUserControlEvent(e) {
        openUserTables.classList.toggle('header__tables-open')
        e.stopPropagation()
      }

      function openUserTablesContainer(e) {
        e.stopPropagation()
      }

      openUserControl.addEventListener('click', openUserControlEvent)
      mainProme.addEventListener('click', hideUserControlEvent)
      userContainer.addEventListener('click', openUserTablesContainer)

  },


    // Hàm loading song
    loadCurrentSongs: function() {
      // cdThumb.style.backgroundImage = `url('${this.songs[this.indexCurrSong].image}')`
      cdThumb.setAttribute('src', this.songs[this.indexCurrSong].image)
      nameSong.textContent = this.songs[this.indexCurrSong].name
      nameArtist.textContent = this.songs[this.indexCurrSong].singer
      audio.src = this.songs[this.indexCurrSong].path

      btnLove.onclick = function() {
        btnLove.classList.toggle('activelove')
      }

      // Active song not lose list song options
      const songActive = $$('.body__playlist-song__box ');
      [...songActive].forEach((item) => item.classList.remove('active'));
      [...songActive].forEach((item) => {
          if (parseInt(item.dataset.index) === this.indexCurrSong) {
              item.classList.add('active')
          }
      });
    },

    nextSong: function() {
      this.indexCurrSong++
      if(this.indexCurrSong >= this.songs.length) {
        this.indexCurrSong = 0
      }
      this.loadCurrentSongs()
    },

    preSong: function() {
      this.indexCurrSong--
      if(this.indexCurrSong < 0) {
        this.indexCurrSong = this.songs.length - 1
      }
      this.loadCurrentSongs()
    },

    // xử lý random bài hát
    randomSong: function() { 
      const fistSong = 0
      const arraySong = app.songs.length
      
      function randomSongs(fistSongPlay, arraySongPlay) {
        const songsPlayed = []
        const randomSongs = Math.floor(Math.random() * (arraySong - fistSong + 1)) + fistSong
        if(songsPlayed.includes(randomSongs)) {
          random(fistSongPlay, arraySongPlay)
        } else {
          songsPlayed.push(randomSongs)

          for(let i = 0; i < songsPlayed.length; i++) {
            var songRandom = songsPlayed[i]
          }
        }
        app.indexCurrSong = songRandom
      }
      randomSongs(fistSong, arraySong)
      this.loadCurrentSongs()
      
    },

    start: function() {
      // Hàm render
        this.render()

      // Hàm xử lý sự kiện
        this.handleEvents()

      // Hàm định nghĩa indexCurrSong
        this.defineProperties()

      // Hàm loadsong
        this.loadCurrentSongs()

    }
}

app.start()


