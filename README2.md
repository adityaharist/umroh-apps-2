Pemberitahuan : Dikarenakan hp sedang error/diperbaiki. Komunikasi sementara lewat Email mas Baron..

Proyek kelanjutan dari umroh apps version 1.2
Diperbarui dengan tampilan layout yang "eye catching" dengan versi terbaru 1.3
Dengan fitur pada aplikasi yang masih sama dengan versi sebelumnya

Tetap menggunakan framework7 untuk tampilan layout (User Interface) pada aplikasi mobile ini yang responsive.
Penggunaan bahasa pemrograman HTML(markup), CSS(style), Javascript(client-side) dibungkus kedalam sebuah framework7

Phonegap dan cordova, serta bantuan dependencies node js yaitu npm
memudahkan build aplikasi hybrid menjadi aplikasi mobile

Build ke bentuk aplikasi android yang membutuhkan sdk android manager, disesuaikan dengan API android sesuaikan dengan device user

Template7 memudahkan manipulasi operasi data yang iteratif, seperti fetching data file 'json'

Kekurangan : - (masih ditunggu)

Untuk membuat aplikasi android atau biasa disebut dengan apk.
Maka bisa menggunakan dengan apache cordova
Sebelumnya harus menginstall cordova secara globally :
>npm install -g cordova
setelah berhasil diinstall maka selanjutnya adalah :
>cordova create umrah com.panduan.umrah Umrah-Apps
>cd umrah
>cordova platform add android
>cordova build android

Bisa juga dengan HTML5APKBUILDER
Download disini https://bitbucket.org/mrchay/html5apkbuilder/src/default/
Lalu install java jika belum ada pada laptopmu
Taruh file hasil download umroh ini ke folder html5 pada html5apkbuilder
Klik go.bat pada html5apkbuilder untuk memulai
Ada 3 Aplikasi yang telah selesai dibuild ke apk

Sumber dokumentasi lain : https://www.petanikode.com/cordova/
Membuat proyek dengan cordova, kemudian merubah file yang ada di cordova terutama www
untuk diganti dengan file umroh apps ini
Catatan : harus menginstall nodeJS, Java, JDK, SDK, npm cordova

Mengganti title apk:
-
Mengganti icon apk:
-

Sumber lainnya : https://appsbuilders.org/guides/cara-build-apk-aplikasi-android-menggunakan-html5/

Hapus semua file yang ada di folder umrah
kemudian pindahkan proyek aplikasi yang telah dibangun sebelumnya
ke folder proyek aplikasi cordova yang telah dibuat
tinggal di drag and drop lalu selesai
    
    
-------------------------------------------------------    

Pemandu Haji    
Ada lebih dari 1,5 miliar Muslim di seluruh dunia. Ibadah Haji merupakan kebutuhan wajib bagi mereka – itulah target pasar kami! Setiap tahun, ada lebih dari 6-8 juta Muslim menunaikan ibadah Haji dengan bepergian ke Mekah untuk melakukan Umrah selain Haji. Akan tetapi:    
1) Ribuan orang tersesat    
2) Ribuan orang terluka    
3) Ratusan orang Meninggal dunia    
Kami adalah Aplikasi Pemandu Haji dan kami akan membuat Haji & Umrah Lebih Aman & Sederhana. Kami telah mengembangkan teknologi perangkat keras dan perangkat lunak yang dapat dipakai yang akan memungkinkan para peziarah untuk:    
1) Berkomunikasi satu sama lain melalui Audio 2 arah    
2) Melacak teman dan keluarga    
3) Menavigasi secara offline    
Inilah kelebihannya – Semuanya bekerja secara offline, tanpa internet atau koneksi seluler, dalam jangkauan 4-5 KM dan dengan masa pakai baterai sekitar 5 hari.    
Kami ingin orang-orang memakai band kami dan melupakan semua hal yang merepotkan, sehingga mereka dapat fokus pada perjalanan spiritual mereka.    
Kami sudah memiliki prototipe yang berfungsi.    
Kami telah menunjukkannya kepada banyak konsultan perjalanan haji dan kementerian terkait – Mereka sangat bersemangat akan hal ini.    
    
    
=====English Version=====    
There are more than 1.5 billion Muslims around the globe. Hajj is necessary for each and every one of them – that is our target market! Ever year 6-8 million Muslims find their way to Mecca to perform Hajj & Umrah. However:    
1) Thousands of people get lost    
2) Thousands get injured    
3) Hundreds Die    
We are Hajj Guider and we are going to make Hajj & Umrah Safer & Simpler. We have developed wearable hardware and software tech that will allow the pilgrims to:    
1) Communicate each other via 2 way Audio    
2) Track friends and family    
3) Navigate offline    
Here’s the magic – Everything works offline, without internet or cellular connection, over a 4-5 KM range and with a battery life of around 5 days. We want people to wear our band and forget about all the hassles, so that they can focus on their spiritual journey. We already have a working prototype. We have shown it to numerous Hajj travel consultants and relevant ministries – They are really excited about it.    