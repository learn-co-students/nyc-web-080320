# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_27_181213) do

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.integer "snail_id"
    t.integer "snail_snap_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snail_snap_id"], name: "index_comments_on_snail_snap_id"
  end

  create_table "snail_snaps", force: :cascade do |t|
    t.string "img_url"
    t.string "caption"
    t.integer "snail_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["snail_id"], name: "index_snail_snaps_on_snail_id"
  end

  create_table "snails", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "slime_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "img_url"
  end

  add_foreign_key "comments", "snail_snaps"
  add_foreign_key "snail_snaps", "snails"
end
