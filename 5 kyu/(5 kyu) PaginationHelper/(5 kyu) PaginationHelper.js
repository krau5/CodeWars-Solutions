function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex + 1 > this.pageCount()) {
    return -1;
  };

  const count = this.itemCount() - pageIndex * this.itemsPerPage;

  return count > this.itemsPerPage ? this.itemsPerPage : count;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex + 1 > this.itemCount()) {
    return -1;
  };

  return Math.floor((itemIndex + 1) / this.itemsPerPage)
}
