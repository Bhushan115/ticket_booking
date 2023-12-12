import { ref, reactive } from "vue";

export default (() => {
const __VLS_setup = async () => {
const currentStep = ref(1);
const bookingDate = reactive({
numberOfSeats: 0,
seats: [],
});
function setNumberOfSeats(n) {
bookingData.numberOfSeats = n;
}
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'MovieDetails';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'Button', typeof __VLS_components, 'Button'>;
__VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button;
// @ts-ignore
[Button, Button, Button, Button, Button, Button,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("text-gray-900 font-bold text-[32px]"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mt-11 flex flex-row items-center justify-between"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col space-y-3"), };
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-gray-700 text-base font-bold uppercase"), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-gray-600 text-xl font-semibold"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-gray-700 text-base font-bold uppercase"), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-gray-600 text-xl font-semibold"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("max-w-full"), };
if (__VLS_ctx.currentStep === 0) {
// @ts-ignore
[currentStep,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("mx-12"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("p-2 mx-12 max-w-ful mt-7 bg-white shadow-2xl rounded items-center"), };
{
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ("https://rukminim2.flixcart.com/image/850/1000/poster/q/a/g/large-fast-n-furious-4300-fast-and-furious-6-poster-original-imaes5ksdceqhkg6.jpeg?q=90"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("w-full flex items-center justify-center mt-7"), };
{
__VLS_templateComponents.Button;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Button>) = { size: ("xl"), variant: ("solid"), };
const __VLS_0 = new __VLS_templateComponents.Button({ size: ("xl"), variant: ("solid"), });
const __VLS_1 = __VLS_templateComponents.Button({ size: ("xl"), variant: ("solid"), });
let __VLS_2!: import('./__VLS_types.js').PickNotAny<typeof __VLS_0, typeof __VLS_1>;
type __VLS_3 = import('./__VLS_types.js').InstanceProps<typeof __VLS_2, typeof __VLS_templateComponents.Button>;
const __VLS_4: import('./__VLS_types.js').EventObject<typeof __VLS_2, 'click', typeof __VLS_templateComponents.Button, __VLS_3['onClick']> = {
click: $event => {
__VLS_ctx.currentStep++;
}
};
// @ts-ignore
[currentStep,];
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col sapce-y-3 mt-16"), };
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("text-gray-700 text-base font-bold uppercase"), };
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("text-gray-600 text-lg font-normal"), };
}
}
}
}
else if (__VLS_ctx.currentStep === 1) {
// @ts-ignore
[currentStep,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("font-medium text-xl mt-7 text-gray-900"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col w-full space-y-5 mt-6"), };
for (const [index] of (await import('./__VLS_types.js')).getVForSourceType(8)) {
{
__VLS_templateComponents.Button;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Button>) = { size: ("lg"), variant: ((index === __VLS_ctx.bookingData.numberOfSeats ? 'subtle' : 'white')), class: ("shadow-lg"), };
const __VLS_5 = new __VLS_templateComponents.Button({ size: ("lg"), variant: ((index === __VLS_ctx.bookingData.numberOfSeats ? 'subtle' : 'white')), class: ("shadow-lg"), });
const __VLS_6 = __VLS_templateComponents.Button({ size: ("lg"), variant: ((index === __VLS_ctx.bookingData.numberOfSeats ? 'subtle' : 'white')), class: ("shadow-lg"), });
let __VLS_7!: import('./__VLS_types.js').PickNotAny<typeof __VLS_5, typeof __VLS_6>;
type __VLS_8 = import('./__VLS_types.js').InstanceProps<typeof __VLS_7, typeof __VLS_templateComponents.Button>;
const __VLS_9: import('./__VLS_types.js').EventObject<typeof __VLS_7, 'click', typeof __VLS_templateComponents.Button, __VLS_8['onClick']> = {
click: $event => {
__VLS_ctx.setNumberOfSeats(index);
}
};
// @ts-ignore
[bookingData, bookingData, bookingData, setNumberOfSeats,];
(index);
}
}
}
}
}
}
if (__VLS_ctx.currentStep !== 0) {
// @ts-ignore
[currentStep,];
{
__VLS_templateComponents.Button;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Button>) = { size: ("xl"), mt: ("5"), variant: ("subtle"), };
const __VLS_10 = new __VLS_templateComponents.Button({ size: ("xl"), mt: ("5"), variant: ("subtle"), });
const __VLS_11 = __VLS_templateComponents.Button({ size: ("xl"), mt: ("5"), variant: ("subtle"), });
let __VLS_12!: import('./__VLS_types.js').PickNotAny<typeof __VLS_10, typeof __VLS_11>;
type __VLS_13 = import('./__VLS_types.js').InstanceProps<typeof __VLS_12, typeof __VLS_templateComponents.Button>;
const __VLS_14: import('./__VLS_types.js').EventObject<typeof __VLS_12, 'click', typeof __VLS_templateComponents.Button, __VLS_13['onClick']> = {
click: $event => {
__VLS_ctx.currentStep--;
}
};
// @ts-ignore
[currentStep,];
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
currentStep: currentStep,
setNumberOfSeats: setNumberOfSeats,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
