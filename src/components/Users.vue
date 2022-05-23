<template>
    <div class="users">
        <h3>Users</h3>
        <div class="card">
            <div class="card-header">
                Add new user
            </div>
            <div class="card-body">
                <form class="form-inline" @submit.prevent="addUser">
                    <div class="form-group">
                        <!-- <label>id: <input v-model="first"></label>
                        <label>name: <input v-model="first"></label>
                        <label>rank: <input v-model="first"></label> -->

                        <label class="form-label">ID</label>
                        <input v-model="id" type="text" class="form-control" required disabled>
                    </div>
                    <div class="form-group">
                        <label>name</label>
                        <input v-model="name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
                    </div>
                    <div class="form-group">
                        <label>Job
                        <!-- <input v-model="job" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required> -->
                        <select v-model="job" class="form-select" aria-label="Default select example">
                            <!-- <option selected>select job</option> -->
                            <option value="Presient" disabled>President</option>
                            <option value="Manager">Manager</option>
                            <option value="Clerk">Clerk</option>
                            <option value="Salesman">Salesman</option>
                        </select>
                        </label>
                    </div>
                    <div class="ml-auto text-right">
                        <button type="submit" class="btn btn-primary my-2">Add</button>

                    </div>
                </form>

            </div>
            
        </div>
        <div class="card mt-5">
            <div class="card-header">
                User List
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Job
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="u in users" v-bind:key="u.id">
                                <td>{{u.id}}</td>
                                <td>{{u.name}}</td>
                                <td>{{u.job}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
let id = 0
export default {
    data() {
        return {
            users: [
                {id: id++, name:'aaa', job:'President'},
                {id: id++, name:'bbb', job:'Manager'}
            ],
            selected: '',
            prefix: '',
            id: id,
            name: '',
            job: '',

        }
    },
    methods:{
        addUser(){
            this.users.push({id:id++, name: this.name, job: this.job})
            this.name=''
            this.job=''
            this.id = id
        }
    }
}
</script>
<style>
</style>