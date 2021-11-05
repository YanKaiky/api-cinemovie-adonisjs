import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('', 'UsersController.store')
  Route.get('', 'UsersController.index')
  Route.get(':/guid', 'UsersController.show')
  Route.put(':/guid', 'UsersController.update')
  Route.delete(':/guid', 'UsersController.destroy')
}).prefix('/users')

Route.group(() => {
  Route.post('', 'MoviesController.store')
  Route.get('', 'MoviesController.index')
  Route.get('/:guid', 'MoviesController.show')
  Route.put('/:guid', 'MoviesController.update')
  Route.delete('/:guid', 'MoviesController.destroy')
}).prefix('/movies')

Route.group(() => {
  Route.post('', 'AnimesController.store')
  Route.get('', 'AnimesController.index')
  Route.get('/:guid', 'AnimesController.show')
  Route.put('/:guid', 'AnimesController.update')
  Route.delete('/:guid', 'AnimesController.destroy')
}).prefix('/animes')

Route.group(() => {
  Route.post('', 'SeriesController.store')
  Route.get('', 'SeriesController.index')
  Route.get('/:guid', 'SeriesController.show')
  Route.put('/:guid', 'SeriesController.update')
  Route.delete('/:guid', 'SeriesController.destroy')
}).prefix('/series')
