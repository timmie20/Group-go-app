# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Form handling using Formik library ==> For all pages and component to access formik function , properties , attributes and values , a context need to be created , hence the FormContext.js file.

view it from the persective of react context api where you have to wrap the routes that would need the form data to be generally accessed eg.
<FormContext.Provider>
{entire app / routes}
</FormContext.Provider> , as done in the app.js file

to use formik you can either use the useFormik hook or a Formik render component

within the Formik render component a children props is set which encapsulates the routes/components that required the form data , like react context api.

initialValues props helps set state values , it replaces having to create/use the useState hook to handle data state , with the use of initialValues that is done automatically by formik and those values can be accessed by using the "values" property
e.g values.name / values.email

in reference to this app, the Form and Field component can be used for structural layout of the form. using the Field component comes with some handlers right from the box such as onChange and onBlur .

i created a custom component called InputField , this component is passed to the Formik Field component via the component prop so instead of formik to render its normal Field Component it will render the InputField component based off of some predefined props like label, id, name, placeholder, type etc... you can see an example in the TemplateEventForm component.

Take note of the name prop , it is very essential as it is used to target the particular input where the onChange handler is being trigger.
For example lets say we have a state defined at initialValues as studentName , when we want to set the value of that state you have to create a Field input and give it the prop name of "studentName" exactly how it was decleared at the initialValues.

Hence if that is done there's no need to define an onChange handler as a part of the Field component prop cause it handles the onChage and setValues consecutively.

Notice how i also defined the {...field} prop in the InputField component , why ? it provides the regular html input or textarea with functionalities of the Formik Field component such as onChange, onBlur and setting state values etc.

To get all values data just console.log(values)

Lastly you might have noticed in the TemplateFieldForm.jsx component i set the Field prop name as e.g eventInfo.creatorName etc , why?
this is cause thats how formik handles setting of state values when the state is in an object. Reference the FormContext.jsx file to see what i mean.

if i want to set the state of the event uid i'll say
<Field name='uid'/>

but if the state value were to be in an object it will go like this
<Field name='object.state'/> eg <Field name='eventInfo.CreatorName'/>

i hope you understand.
