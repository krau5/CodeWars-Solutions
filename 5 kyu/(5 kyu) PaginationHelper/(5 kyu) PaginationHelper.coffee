class PaginationHelper
  constructor: (@collection, @itemsPerPage) ->

  itemCount: ->
    return @collection.length

  pageCount: ->
    return Math.ceil(@collection.length / @itemsPerPage)

  pageItemCount: (pageIndex) ->
    if pageIndex + 1 > @pageCount()
      return -1

    count = @itemCount() - pageIndex * @itemsPerPage

    return if count > @itemsPerPage then @itemsPerPage else count

  pageIndex: (itemIndex) ->
    if itemIndex < 0 or itemIndex + 1 > @itemCount()
      return -1

    return Math.floor((itemIndex + 1) / @itemsPerPage)
   
