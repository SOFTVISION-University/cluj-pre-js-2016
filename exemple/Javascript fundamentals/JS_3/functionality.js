document.addEventListener('DOMContentLoaded', function() {
  var notifier;

  notifier = document.getElementById('notifier')
  notifier.innerText = 'Loading done.';

  notifier.addEventListener('click', function() {
    notifier.className += ' hide';
    notifier.removeEventListener('click');
  })
});
