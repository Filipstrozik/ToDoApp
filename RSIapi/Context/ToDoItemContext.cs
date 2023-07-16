﻿using Microsoft.EntityFrameworkCore;
using RSIapi.Models;

namespace RSIapi.Context
{
    public class ToDoItemContext : DbContext
    {
        public ToDoItemContext(DbContextOptions<ToDoItemContext> options)
            : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<ToDoItem> ToDoItems { get; set; }

        public DbSet<Board> Boards { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Role> Roles { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.ToDoItems)
                .WithOne(t => t.User)
                .HasForeignKey("UserId")
                .IsRequired(false)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<Role>()
                .Property(r => r.Name)
                .IsRequired();


            modelBuilder.Entity<Board>()
                 .HasMany(b => b.ToDoItems)
                 .WithOne(t => t.Board)
                 .HasForeignKey("BoardId")
                 .IsRequired();

        }   
    }
}
