(function() {
    var i, j, len, ref, responsiveVideo, rv;
  
    responsiveVideo = class responsiveVideo {
      constructor(video) {
        this.update = this.update.bind(this);
        this.video = video;
        if (!this.video) {
          return;
        }
        this.img = new Image(this.video.width, this.video.height);
        this.img.onload = this.update;
        this.img.src = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' width%3D'${this.video.width}' height%3D'${this.video.height}' %2F%3E`;
        this.img.className = `rv-img rv-img-${document.querySelectorAll('.rv-img').length + 1}`;
        this.img.setAttribute('style', 'position:absolute; top:0; left:0; opacity:0; pointer-events:none; width: auto; height: auto; max-width: 100%;');
        this.video.parentNode.setAttribute('style', 'position:relative; padding:0;');
        this.video.parentNode.appendChild(this.img);
        // @video.onload = ->
        //   @className += ' rv-loaded'
        window.addEventListener('resize', this.update);
      }
  
      update() {
        return [this.video.width, this.video.height] = [this.img.width, this.img.height];
      }
  
    };
  
    ref = document.querySelectorAll('.rv');
    // or just an IFRAME
  
    // initialize
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      rv = ref[i];
      window[`rv${i}`] = new responsiveVideo(rv);
    }
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxlQUFBLEVBQUE7O0VBQU0sa0JBQU4sTUFBQSxnQkFBQTtJQUVFLFdBQWEsTUFBQSxDQUFBO1VBa0JiLENBQUEsYUFBQSxDQUFBO01BbEJjLElBQUMsQ0FBQTtNQUViLEtBQWMsSUFBQyxDQUFBLEtBQWY7QUFBQSxlQUFBOztNQUVBLElBQUMsQ0FBQSxHQUFELEdBQU8sSUFBSSxLQUFKLENBQVUsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFqQixFQUF3QixJQUFDLENBQUEsS0FBSyxDQUFDLE1BQS9CO01BQ1AsSUFBQyxDQUFBLEdBQUcsQ0FBQyxNQUFMLEdBQWMsSUFBQyxDQUFBO01BRWYsSUFBQyxDQUFBLEdBQUcsQ0FBQyxHQUFMLEdBQVcsQ0FBQSxnR0FBQSxDQUFBLENBQW1HLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBMUcsQ0FBQSxZQUFBLENBQUEsQ0FBOEgsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFySSxDQUFBLFFBQUE7TUFDWCxJQUFDLENBQUEsR0FBRyxDQUFDLFNBQUwsR0FBaUIsQ0FBQSxjQUFBLENBQUEsQ0FBaUIsUUFBUSxDQUFDLGdCQUFULENBQTBCLFNBQTFCLENBQW9DLENBQUMsTUFBckMsR0FBNEMsQ0FBN0QsQ0FBQTtNQUNqQixJQUFDLENBQUEsR0FBRyxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsK0dBQTNCO01BRUEsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBbEIsQ0FBK0IsT0FBL0IsRUFBd0MsK0JBQXhDO01BQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBbEIsQ0FBOEIsSUFBQyxDQUFBLEdBQS9CLEVBVko7OztNQWNJLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxJQUFDLENBQUEsTUFBbkM7SUFoQlc7O0lBa0JiLE1BQVEsQ0FBQSxDQUFBO2FBRU4sQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVIsRUFBZSxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQXRCLENBQUEsR0FBZ0MsQ0FBQyxJQUFDLENBQUEsR0FBRyxDQUFDLEtBQU4sRUFBYSxJQUFDLENBQUEsR0FBRyxDQUFDLE1BQWxCO0lBRjFCOztFQXBCVjs7QUEwQkE7Ozs7RUFBQSxLQUFBLDZDQUFBOztJQUNFLE1BQU0sQ0FBQyxDQUFBLEVBQUEsQ0FBQSxDQUFLLENBQUwsQ0FBQSxDQUFELENBQU4sR0FBbUIsSUFBSSxlQUFKLENBQW9CLEVBQXBCO0VBRHJCO0FBMUJBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgcmVzcG9uc2l2ZVZpZGVvXG4gIFxuICBjb25zdHJ1Y3RvcjogKEB2aWRlbykgLT5cblxuICAgIHJldHVybiB1bmxlc3MgQHZpZGVvXG4gICAgICAgICAgICBcbiAgICBAaW1nID0gbmV3IEltYWdlKEB2aWRlby53aWR0aCwgQHZpZGVvLmhlaWdodClcbiAgICBAaW1nLm9ubG9hZCA9IEB1cGRhdGVcblxuICAgIEBpbWcuc3JjID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyB3aWR0aCUzRCcje0B2aWRlby53aWR0aH0nIGhlaWdodCUzRCcje0B2aWRlby5oZWlnaHR9JyAlMkYlM0VcIlxuICAgIEBpbWcuY2xhc3NOYW1lID0gXCJydi1pbWcgcnYtaW1nLSN7ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJ2LWltZycpLmxlbmd0aCsxfVwiXG4gICAgQGltZy5zZXRBdHRyaWJ1dGUgJ3N0eWxlJywgJ3Bvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgbGVmdDowOyBvcGFjaXR5OjA7IHBvaW50ZXItZXZlbnRzOm5vbmU7IHdpZHRoOiBhdXRvOyBoZWlnaHQ6IGF1dG87IG1heC13aWR0aDogMTAwJTsnXG4gICAgXG4gICAgQHZpZGVvLnBhcmVudE5vZGUuc2V0QXR0cmlidXRlICdzdHlsZScsICdwb3NpdGlvbjpyZWxhdGl2ZTsgcGFkZGluZzowOydcbiAgICBAdmlkZW8ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCBAaW1nXG4gICAgIyBAdmlkZW8ub25sb2FkID0gLT5cbiAgICAjICAgQGNsYXNzTmFtZSArPSAnIHJ2LWxvYWRlZCdcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAncmVzaXplJywgQHVwZGF0ZVxuICAgIFxuICB1cGRhdGU6ID0+XG5cbiAgICBbQHZpZGVvLndpZHRoLCBAdmlkZW8uaGVpZ2h0XSA9IFtAaW1nLndpZHRoLCBAaW1nLmhlaWdodF1cbiAgICBcbiMgaW5pdGlhbGl6ZVxuXG5mb3IgcnYsIGkgaW4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJ2JykgIyBvciBqdXN0IGFuIElGUkFNRVxuICB3aW5kb3dbXCJydiN7aX1cIl0gPSBuZXcgcmVzcG9uc2l2ZVZpZGVvIHJ2Il19
  //# sourceURL=coffeescript