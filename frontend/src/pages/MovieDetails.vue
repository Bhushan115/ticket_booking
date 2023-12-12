<template>
    <div>
        <h1 class="text-gray-900 font-bold text-[32px]">Ride On Die </h1>
        <div class="mt-11 flex flex-row items-center justify-between">
            <div class="flex flex-col space-y-3">
                <h2 class="text-gray-700 text-base font-bold uppercase">Director</h2>
                <p class="text-gray-600 text-xl font-semibold">
                    Shravan Sapkal
                </p>
            </div>
            <div>
                <h2 class="text-gray-700 text-base font-bold uppercase">RELEASE DATE</h2>
                <p class="text-gray-600 text-xl font-semibold">
                    21st July,2023
                </p>
            </div>
        </div>
        <div class="max-w-full">
            <div class="mx-12" v-if="currentStep === 0">

                <div class="p-2 mx-12 max-w-ful mt-7 bg-white shadow-2xl rounded items-center">
                    <img
                        src="https://rukminim2.flixcart.com/image/850/1000/poster/q/a/g/large-fast-n-furious-4300-fast-and-furious-6-poster-original-imaes5ksdceqhkg6.jpeg?q=90">
                </div>

                <div class="w-full flex items-center justify-center mt-7">
                    <Button size="xl" variant="solid" @click="currentStep++">Book Tickets</Button>
                </div>

                <div class="flex flex-col sapce-y-3 mt-16">
                    <h2 class="text-gray-700 text-base font-bold uppercase">Synopsis</h2>
                    <p class="text-gray-600 text-lg font-normal">
                        Narayangaon
                    </p>
                </div>
            </div>

            <div v-else-if="currentStep === 1">
                <h2 class="font-medium text-xl mt-7 text-gray-900">How many seats?</h2>

                <div class="flex flex-col w-full space-y-5 mt-6">
                    <Button size="lg" class="shadow-lg" v-for="index in 8"
                        v-bind:variant="index === bookingData.numberOfSeats ? 'subtle' : 'white'"
                        @click="setNumberOfSeats(index)">{{ index }}</Button>
                </div>
            </div>
            <div v-else-if="currentStep === 2">
                <div class="flex flex-col space-y-4">
                    <h2 class="font-medium text-xl mt-7 text-gray-900">Date</h2>
                    <input type="date" v-model="bookingData.date" />

                    <div class="flex flex-col space-y-4">
                        <h2 class="font-medium text-xl mt-7 text-gray-900">Select Cinema & Show</h2>
                    </div>

                    <div class="space-y-2">
                        <div class="bg-white shadow-xl p-4 rounded">
                            <h3 class="text-sm font-bold text-gray-800">Star Talkies</h3>
                            <div class="flex flex-row space-x-2">
                                <button size="sm" variant="outline">12:30PM</button>
                                <button size="sm" variant="subtle">3:30PM</button>

                            </div>
                        </div>
                        <div class="bg-white shadow-xl p-4 rounded">
                            <h3 class="text-sm font-bold text-gray-800">Inox Theater</h3>
                            <div class="flex flex-row space-x-2">
                                <button size="sm" variant="outline">11:10AM</button>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- <div class="flex flex-col w-full space-y-6 mt-6">
                    <Button size="lg" class="shadow-lg" v-for="index in 8"
                        v-bind:variant="index === bookingData.numberOfSeats ? 'subtle' : 'white'"
                        @click="setNumberOfSeats(index)">{{ index }}</Button>
                </div> -->
            </div>
            <div v-else-if="currentStep === 3">
                <h2 class="font-medium text-xl mt-7 text-gray-900">Select Seats</h2>
                <div>
                    <div :key="row" class="flex flex-row" v-for="row in Object.keys(seatStructure)">

                        <span @click="selectSeat(row, seat[0])" v-for="seat in seatStructure[row]" :key="seat[0]"
                            class="w-6 h-8 m-2 bg-blue-300 rouded-[2px]"
                            :class="seat[1] === 'Available' ? 'bg-blue-300' : seat[1] == 'Selected' ? 'bg-blue-600' : bg - gray - 300">
                        </span>


                    </div>
                </div>
            </div>
            <div v-else-if="currentStep === 4">
                <div class="w-full flex items-center flex-col mt-7"></div>
                <h1 class="text-[110px]">POP</h1>
                <h2 class="font-medium text-xl mt-7 text-gray-900">Enjoy The Movie!</h2>

            </div>


        </div>
        <div class="flex flex-row mt-6 space-x-2">
            <Button size="xl" variant="subtle" v-if="currentStep !== 0 && currentStep != 4" @click="currentStep--">Go
                Back</Button>
            <Button v-if="currentStep !== 0 && currentStep != 4" size="xl" variant="solid"
                @click="currentStep++">Next</Button>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
function getSeatStructure(alphabets, numbers) {
    const structure = {};
    for (const alphabet of alphabets) {
        structure[alphabet] = [];
        for (const number of numbers) {
            structure[alphabet].push([number, 'Available']);
        }
    }
    return structure;
}
const seatStructure = reactive(getSeatStructure(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], [1, 2, 3, 4, 5, 6, 7]));

//     A:[
//         [1,'Booked'],
//         [2,'Available'],
//         [3,'Available'],
//         [4,'Available'],
//         [5,'Available'],
//         [6,'Available'],
//         [7,'Available'],
//     ],
//     B:[
//         [1,'Available'],
//         [2,'Available'],
//         [3,'Available'],
//         [4,'Available'],
//         [5,'Available'],
//         [6,'Available'],
//         [7,'Available'],
//     ],
//     C:[
//         [1,'Available'],
//         [2,'Available'],
//         [3,'Available'],
//         [4,'Available'],
//         [5,'Available'],
//         [6,'Available'],
//         [7,'Available'],
//     ],
//     D:[
//         [1,'Available'],
//         [2,'Available'],
//         [3,'Available'],
//         [4,'Available'],
//         [5,'Available'],
//         [6,'Available'],
//         [7,'Available'],
//     ],
//     E:[
//         [1,'Available'],
//         [2,'Available'],
//         [3,'Available'],
//         [4,'Available'],
//         [5,'Available'],
//         [6,'Available'],
//         [7,'Available'],
//     ],


// }
var bookingData = {}
const today = new Date().toISOString().substr(0, 10);
const currentStep = ref(1)
const bookingData = reactive({
    numberOfSeats: 0,
    date: today,
    selectedSeats: [],
    seat: []
})
function setNumberOfSeats(n) {
    bookingData.numberOfSeats = n;
    console.log(n)
}
function selectSeat(row, number) {
    const seat = seatStructure[row].find((seat) => seat[0] === number)
    seat[1] = 'Selected'
    bookingData.selectedSeats.push(`${row}${number}`)
}

</script>