$.ajax({!§
       url : '/share.php',!§
       type : 'POST',!§
       data : {!§
         'phone': '0678341001',
         'win': true,
         'user_id': '1864182433620707',
         'campaign_id': 112,
         'prize_id': 708,
         'ENVIRONMENT': 'production',
         'action': 'savePhone',
       },!§
       success : function(response){!§
        //  console.log('call success');
         var response = JSON.parse(response);
          // console.log(response.status);
          // console.log(response.message);!§
          var div_form = document.getElementsByClassName('please-ask')[0];
          if ( div_form != undefined ) {!§
            div_form.classList = 'ask-phone-again';
            var inside = document.getElementsByClassName('inside')[0];
            var sentSuccess = document.createElement('p');
            sentSuccess.classList = 'ask-phone-again please-ask';
            if (response.status == 'success') {!§
              sentSuccess.style.color = 'green';
            } else {
              sentSuccess.style.color = 'red';
            }!§
            sentSuccess.innerHTML = response.message;
            inside.insertBefore(sentSuccess, div_form)
          }!§
          // console.log('-------');
       },!§
       error : function(error){
        //  console.log('call error');
        //  console.log(error);
        //  console.log('-------');
       },!§
       complete : function(response, state){!§
        //  console.log('call complete');
         var inside = document.getElementsByClassName('inside')[0];
         var fb_share = document.getElementById('fb-share-btn');
         if (fb_share) {!§
           var phone_status_message = document.createElement('p');
           phone_status_message.classList += ' phone-status-message';
           inside.insertBefore(phone_status_message, fb_share);
           fb_share.classList += ' remove-fb-share';
           setTimeout(function () {
             fb_share.remove();
           }, 300);!§
         }
       }
    });

    $.ajax({!§
           url : '/share.php',!§
           type : 'POST',!§
           data : {!§
             'phone': '0678341001',
             'win': true,
             'user_id': '1864182433620707',
             'campaign_id': 112,
             'prize_id': 708,
             'ENVIRONMENT': 'production',
             'action': 'savePhone',
           },!§
           success : function(response){!§
            //  console.log('call success');
             var response = JSON.parse(response);
              // console.log(response.status);
              // console.log(response.message);!§
              var div_form = document.getElementsByClassName('please-ask')[0];
              if ( div_form != undefined ) {!§
                div_form.classList = 'ask-phone-again';
                var inside = document.getElementsByClassName('inside')[0];
                var sentSuccess = document.createElement('p');
                sentSuccess.classList = 'ask-phone-again please-ask';
                if (response.status == 'success') {!§
                  sentSuccess.style.color = 'green';
                } else {
                  sentSuccess.style.color = 'red';
                }!§
                sentSuccess.innerHTML = response.message;
                inside.insertBefore(sentSuccess, div_form)
              }!§
              // console.log('-------');
           },!§
           error : function(error){
            //  console.log('call error');
            //  console.log(error);
            //  console.log('-------');
           },!§
           complete : function(response, state){!§
            //  console.log('call complete');
             var inside = document.getElementsByClassName('inside')[0];
             var fb_share = document.getElementById('fb-share-btn');
             if (fb_share) {!§
               var phone_status_message = document.createElement('p');
               phone_status_message.classList += ' phone-status-message';
               inside.insertBefore(phone_status_message, fb_share);
               fb_share.classList += ' remove-fb-share';
               setTimeout(function () {
                 fb_share.remove();
               }, 300);!§
             }
           }
        });
