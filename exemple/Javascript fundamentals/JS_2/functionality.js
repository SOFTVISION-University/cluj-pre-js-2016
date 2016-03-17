document.addEventListener('DOMContentLoaded', function() {
  var notifier,
      firstMessage = 'First message';
      
  notifier = document.getElementById('notifier')
  notifier.innerText = 'Loading done. ' + firstMessage + ' ' + secondMessage;
  //var secondMessage = ' second message';
});
