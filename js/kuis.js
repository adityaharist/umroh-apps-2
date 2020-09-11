//single state object

//daftar pertanyaan, jawaban tersedia nomor 0-3 (index)
var state = {
  questions: [{
      question: 'Tujuan dilaksanakan ibadah haji?',
      answers: ['Mengunjungi Baitullah di Mekah kerana mengerjakan ibadat tertentu pada masa tertentu dengan syarat tertentu', 'Mengunjungi Kaabah di Mekah kerana melakukan tawaf kerana Allah', 'Mengunjungi Baitullah di Mekah kerana melakukan ibadat tertentu pada waktu tertentu.', 'Mengunjungi Baitullah di Mekah kerana ingin melakukan tawaf, saie dan bercukur'],
      answerCorrect: 0
    },
    {
      question: 'Apakah hukum menunaikan haji?',
      answers: ['Harus', 'Fardhu kifayah', 'Wajib bagi yang mampu', 'Sunat'],
      answerCorrect: 2
    },
    {
      question: 'Diantara berikut ini, manakah bukan merupakan rukun haji?',
      answers: ['Sai', 'Tertib', 'Wukuf', 'Melontar Jamratul Aqabah'],
      answerCorrect: 1
    },
    {
      question: 'Tanggal waktu dilaksanakannya wukuf bagi umat Islam ialah',
      answers: ['10 Zulhijjah', '10 Zulhijjah', '9 Zulhijjah', '10 Zulkaedah'],
      answerCorrect: 2
    },
    {
      question: 'Berikut, manakah yang bukan merupakan syarat-syarat dalam melakukan ibadah haji :',
      answers: ['Ada kesempatan waktu', 'Mempunyai ilmu yang luas tentang haji', 'Ada kendaraan untuk pulang dan pergi', 'Mempunyai nafkah yang cukup untuk tanggungan yang ditinggalkan'],
      answerCorrect: 0
    },
    {
      question: 'Berikut ini, manakah yang merupakan larangan saat mengerjakan haji?',
      answers: ['Menanam tanaman di Mekah', 'Menutup kepala bagi laki-laki', 'Memakai obat-obatan terlarang', 'Menutup tapak tangan bagi perempuan'],
      answerCorrect: 2
    },
    {
      question: 'Apakah yang dimaksud dengan tawaf ifadhah?',
      answers: ['Tawaf selamat datang', 'Tawaf selamat tinggal', 'Tawaf sunat yang boleh dilakukan sewaktu-waktu', 'Rukun Tawaf yang wajib dikerjakan oleh semua jemaah haji'],
      answerCorrect: 2
    },
    {
      question: 'Berikut adalah perkara sunat yang dilakukan sebelum niat ihram haji kecuali :',
      answers: ['Pakai pakaian ihram berwarna putih',
        'Memohon maaf atas kesalahan yang pernah dilakukan terhadap orang lain',
        'Memotong kuku',
        'Memakai minyak rambut dan bau-bauan'
      ],
      answerCorrect: 2
    },
    {
      question: 'Jemaah yang melakukan haji secara tamattuk atau qiran dikenakan dam berupa?',
      answers: ['Tertib dan taqdir', 'Tertib dan takdil', 'Takhyir dan taqdir', 'Takhyir dan takdil'],
      answerCorrect: 2
    },
    {
      question: 'Berikut adalah rukun umrah kecuali',
      answers: ['Wukuf', 'Tawaf', 'Sai', 'Tertib'],
      answerCorrect: 3
    }
  ],

  currentQuestion: 0, //cara menyimpan jumlah pertanyaan atau bisa diartikan diantrikan
  userScore: 0 //cara menyimpan score hasil 'pengguna'
}

// menggunakan jquery, saat klik tombol 'mulai' akan menghapus class js-startPage ("UI berupa tombol mulai")
function clickStart() {
  $('.js-startPage').on('click', 'button', function(event) {

    $('.js-startPage').remove();
    $('#question-container').removeClass('hidden');
    $('#petunjuk').removeClass('hidden');
  })
};

// saat klik answer
function clickAnswer(chosenElement, state) {

  var chosenAnswer = $(chosenElement).val();

  //if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
  //jika memilik jawaban yang BENAR, maka akan mengatakan pada pengguna "CORRECT" daripada "WRONG"
  if (chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {
    state.userScore += 1;
    $('.response1').text('Mantul!');
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
  $('section').remove();

  //kuis berakhir dan menampilkan pesan serta membuang jumlah pertanyaan serta nilai dari halaman bawah
  if (state.currentQuestion > 9) {
    // $('.js-startPage').addClass();
    $('#tab-1').append("<div class='row' id='question-container'> <section class = 'question-container col-8'>" + 
                        '<div class="end">Anda telah selesai!</div> <p class ="endScore">Skor anda ' + 
                          state.userScore + " dari " + state.currentQuestion + "<p>");
    $('#tab-1').append('<a class="balik button button-raised" href="/materi-panduan/">Ke Materi Panduan</a>' + "</section> </div>");
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

function random(argument) {
  // body...
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
