export default function(){
  this.transition(
    this.fromRoute('books'),
    this.toRoute('author'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}