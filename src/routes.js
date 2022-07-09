import CustomHandler from './handler.js'

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: CustomHandler.addBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: CustomHandler.getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: CustomHandler.getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: CustomHandler.editBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: CustomHandler.deleteBookByIdHandler
  }
]

export default routes
