// Вопрос об "if"

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );               // выполнится, т.к. -1 || 0 даёт -1, т.е. true
if (-1 && 0) alert( 'second' );              // не выполнится, т.к. -1 && 0 даёт 0, т.е. false
if (null || -1 && 1) alert( 'third' );       // выполнится, т.к. -1 && 1 даёт 1, и null || 1 даёт 1, т.е. true