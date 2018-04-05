# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasks3.Repo.insert!(%Tasks3.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
    alias Tasks3.Repo
    alias Tasks3.Users.User
    alias Tasks3.Tasks.Task
  
    def run do
      Repo.delete_all(User)
      a = Repo.insert!(%User{ name: "Evan" })
      b = Repo.insert!(%User{ name: "Nat" })
      c = Repo.insert!(%User{ name: "Ben" })
      d = Repo.insert!(%User{ name: "Lerner" })
  
      Repo.delete_all(Task)
      Repo.insert!(%Task{ user_id: a.id, title: "Task for Evan", description: "do work", time: 0, completed: false })
      Repo.insert!(%Task{ user_id: b.id, title: "Task for Nat", description: "do work", time: 0, completed: false })
      Repo.insert!(%Task{ user_id: b.id, title: "Task for Nat Again", description: "do work", time: 0, completed: false })
      Repo.insert!(%Task{ user_id: c.id, title: "Task for Ben", description: "do work", time: 0, completed: false })
      Repo.insert!(%Task{ user_id: d.id, title: "Task for Lerner", description: "do work", time: 0, completed: false })
    end
  end
  
  Seeds.run