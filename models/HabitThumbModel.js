class HabitThumb{
    constructor(id, title, startDate, endDate, entries) {
        this.id = id;
        this.title = title || null;
        this.startDate = startDate || null;
        this.endDate = endDate || null;
        this.entries = entries || null;
      }
}
module.exports=HabitThumb;