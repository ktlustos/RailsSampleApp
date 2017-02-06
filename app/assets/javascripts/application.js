// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


// $(document).ready(function() {
//     $('#submit_micropost_button').attr('disabled', true);
//
//     $('#micropost_text_area').on('change keyup paste', function() {
//         if ($('#micropost_text_area').val() == true && $('#micropost_text_area').val().length >= 140) {
//             $('#submit_micropost_button').attr('disabled', false);
//         }
//     })
// });

// $(document).ready(function() {
//     $('#micropost_text_area').on("change keyup paste", function() {
//         var post_length = $('#micropost_text_area').val().length;
//         var submit_button = $('#submit_micropost_button');
//         if (post_length > 0 || post_length <= 140) {
//             submit_button.attr('disabled', false);
//         }
//         if (post_length == 0 || post_length > 140) {
//             submit_button.attr('disabled', true);
//         }
//     });
// });

// $(document).ready(function() {
//     $('#micropost_text_area').on('change keyup paste', function() {
//         var post_length = $('#micropost_text_area').val.length;
//         var submit_button = $('#submit_micropost_button');
//         if (post_length > 0 || post_length <= 140) {
//             submit_button.prop('disabled', false);
//             if (post_length == 0 || post_length > 140) {
//                 submit_button.prop('disabled', true);
//             }
//         }
//     });
// });

function checkMicropostForm() {
    var post_length = $('#micropost_text_area').val().length;
    var submit_button = $('#submit_micropost_button');
    if (post_length > 0 || post_length <= 140) {
        submit_button.attr('disabled', false);
    }
    if (post_length == 0 || post_length > 140) {
        submit_button.attr('disabled', true);
    }
}

$(document).on('turbolinks:load', function() {
    checkMicropostForm();
    $('#micropost_text_area').on("change keyup paste", checkMicropostForm);
});
