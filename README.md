# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|
|e-mail|integer|null: false|
|password|integer|null: false|

### Association
- has_many :messages
- has_many :groups, through: :members
- has_mamy :members



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group-name|integer|null: false|

### Association
- has_many :messages
- has_many :users, through: :members
- has_mamy :members



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|integer|null: true, index|
|image|integer|null: true, index|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user