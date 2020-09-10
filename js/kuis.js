//single state object

//daftar pertanyaan, jawaban tersedia nomor 0-3 (index)
var state = {
  questions: [{
      question: 'Apakah Hukum asli dari Ibadah Umroh?',
      answers: ['Wajib', 'Sunnah', 'Mubah', 'Makruh'],
      answerCorrect: 1
    },
    {
      question: 'Mana yang bukan rukun Umroh?',
      answers: ['Ihram', 'Tawaf', 'Wudhu', 'Sai'],
      answerCorrect: 2
    },
    {
      question: 'Mana yang bukan larangan Ihram?',
      answers: ['Kentut', 'Berburu', 'Cukur', 'Memakai Cadar'],
      answerCorrect: 0
    },
    {
      question: 'Manakah keutamaan Umroh dibawah ini yang benar?',
      answers: ['Mendapat Uang', 'Dipanggil Ustadz', 'Menjadi orang Dermawan', 'Menjadi Tamu Allah'],
      answerCorrect: 3
    },
    {
      question: 'Berikut ini tempat-tempat yang berada di Masjidil Haram, kecuali?',
      answers: ['Ka"bah', 'Raudhah', 'Hijir Islmail', 'Maqam Ibrahim'],
      answerCorrect: 1
    },
    {
      question: 'Dibawah ini yang bukan praktik ketika berada di Hajar Aswad adalah?',
      answers: ['Isyarah', 'Mengusap', 'Mencium', 'Menepuk'],
      answerCorrect: 3
    },
    {
      question: 'Berapakah hitungan putaran Tawaf?',
      answers: ['6 kali', '7 kali', '5 kali', '8 kali'],
      answerCorrect: 1
    },
    {
      question: 'Ketika selesai melaksanakan Sai, maka jamaah melakukan?',
      answers: ['Tahalul', 'Tawaf', 'Sholat', 'Berdoa'],
      answerCorrect: 0
    },
    {
      question: 'Tempat terakhir pelaksanaan Sai adalah?',
      answers: ['Shafa', 'Hijir Ismail', 'Marwa', 'Hajar Aswad'],
      answerCorrect: 2
    },
    {
      question: 'Dibawah ini yang bukan area Masjid Nabawi adalah?',
      answers: ['Hajar Aswad', 'Raudhah', 'Makam Rosul', 'Kubah Hijau'],
      answerCorrect: 0
    }
  ],

  currentQuestion: 0, //cara menyimpan jumlah pertanyaan atau bisa diartikan diantrikan
  userScore: 0 //cara menyimpan score hasil 'pengguna'
}

// menggunakan jquery, saat klik tombol 'mulai' akan menghapus class js-startPage ("UI berupa tombol mulai")
function clickStart() {
  $('.js-startPage').on('click', 'button', function(event) {

//     $('.js-startPage').remove();
    $('.js-startPage').addClass('hidden');
    $('#question-container').removeClass('hidden');
    $('#petunjuk').removeClass('hidden');
  })
};

function clickRestart() {
  $('#question-container').on('click', 'button', function(event) {
	  $('.js-startPage').removeClass('hidden');
	  $('#question-container').addClass('hidden');
	  $('#petunjuk').addClass('hidden');
  })
};

// saat klik answer
function clickAnswer(chosenElement, state) {

  var chosenAnswer = $(chosenElement).val();

  //if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
  //jika memilik jawaban yang BENAR, maka akan mengatakan pada pengguna "CORRECT" daripada "WRONG"
  if (chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {
    state.userScore += 1;
    $('.response1').text('Benar :)');
  } else {
    $('.response1').text('Salah :(');

    //add class "wrong answer" so that the button that was clicked can be
    //marked with a red colour
    $(chosenElement).addClass('wrong-answer');
  }

  //menambahkan kelas kedalam jawaban benar lalu ini akan di highlight dengan warna hijau
  $('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');

  //remove hover class from button so the highlighted answers will still stay red and green
  //when you hover over them
  $('button').removeClass('hover');

  //show result
  $('.result').removeClass('hidden');
  //show continue button
  $('.js-continue').removeClass('hidden');
  //disable the answer buttons so user cannot continue clicking them
  $('.js-answer').attr('disabled', true);

  return state;
}


function clickContinue(state) {
  //increment which question user is on by one when continue is clicked
  state.currentQuestion += 1;
  //hide continue button and result again, remove questions and answer
  // hide tombol continue dan result, dengan memberikan class hidden
  $('.js-continue').addClass('hidden');
  $('.result').addClass('hidden');
//   $('section').remove();
  $("section").hide("fast");

  //kuis berakhir dan menampilkan pesan serta membuang jumlah pertanyaan serta nilai dari halaman bawah
  if (state.currentQuestion > 9) {
    $('.js-startPage').addClass();
    $('#tab-1').append("<div class='row' id='question-container'> <section class = 'question-container col-8'>" + 
                        '<div class="end">Anda telah selesai!</div> <p class ="endScore">Skor anda ' + 
                          state.userScore + " dari " + state.currentQuestion + "<p>");
//     $('#tab-1').append('<a class="balik button button-raised" onclick="clickStart();">Lagi?!</a>' + "</section> </div>");
//     $('#tab-1').append('<button class="button button-raised js-start hover" onclick="clickRestart();">Tes ulang</button>' + "</section> </div>");
    $('.js-count').remove(); //hapus class js-count
    $('.js-score').remove(); //hapus class js-score

  } else {
    //if quiz is not done insert new question and answers and update user score and question count
    //jika quiz tidak disisipkan pertanyaan baru dan jawaban dan perbarui score pengguna dan perhitungan jumlah pertanyaan yang muncul
    $('#question-container').append("<section class = 'question-container col-8'>" +
      "<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
      "<button class='button button-raised button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
      "<button class='button button-raised button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
      "<button class='button button-raised button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
      "<button class='button button-raised button3 js-answer hover' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
      "</section>");

    $('.js-count').text("Soal: " + (state.currentQuestion + 1) + "/" + state.questions.length);
    $('.js-score').text("Benar: " + state.userScore + "/" + state.currentQuestion);
  }

}


// semua fungsi js ini, akan berjalan dengan perintah ini
// pertama mengambil fungsi clickstart() -> lalu jika tombol pertanyaan diklik -> lalu tombol 'continue' diklik
$(function() {
  clickStart();
  $('#question-container').on('click', 'button', function(event) {

    clickAnswer($(this), state);
  });

  $('.js-continue').click(function(event) {

    clickContinue(state);
  });

});

$$.getJSON(‘http://sitedatasource.com/data 99’, function(data) {
// specific code related to the data download
$$("#cover").hide();
}
