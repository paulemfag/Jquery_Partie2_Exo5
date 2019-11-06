$ (function (){
  $ ('#lastName').focusin(function(){
    $ ("#lastName").css('border', '1px solid green');
  })
  $ ('#lastName').focusout(function(){
    $ ("#lastName").css('border', '1px solid red');
  })
  $ ('#firstName').focusin(function(){
    $ ("#firstName").css('border', '1px solid green');
  })
  $ ('#firstName').focusout(function(){
    $ ("#firstName").css('border', '1px solid red');
  })
})
