using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace SpeedRun.Models
{
    public partial class DataModel : DbContext
    {
        public DataModel()
            : base("name=DataModel")
        {
        }

        public virtual DbSet<NewFormTable> NewFormTables { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NewFormTable>()
                .Property(e => e.Name)
                .IsUnicode(false);

            modelBuilder.Entity<NewFormTable>()
                .Property(e => e.DateHired)
                .IsUnicode(false);
        }
    }
}
