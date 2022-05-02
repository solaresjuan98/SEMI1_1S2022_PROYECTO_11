import React from 'react'
import { useForm } from '../hooks/useForm';
import { useTodos } from '../hooks/useTodos';

export const CreateTodo = () => {

    const { createTodo } = useTodos();
    const { formData, onChangeForm, isNotEmpty } = useForm({
        tituloTodo: "",
        contenidoTodo: "",
        completado: 0
    });

    const onSubmitTodo = async (ev: any) => {
        ev.preventDefault();

        createTodo(formData.tituloTodo, formData.contenidoTodo, formData.completado)

        formData.tituloTodo = "";
        formData.contenidoTodo = "";
    }

    const allOk = (): boolean => {

        return (isNotEmpty(formData.tituloTodo) && isNotEmpty(formData.contenidoTodo)) ? true : false

    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Task
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmitTodo}>

                        <div className="form-group">
                            <label className="form-label mt-1">Todo title:</label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                name="tituloTodo"
                                value={formData.tituloTodo}
                                onChange={(ev) => onChangeForm(ev)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label mt-1">Todo content:</label>
                            <input
                                type="text"
                                autoComplete='off'
                                className="form-control"
                                name="contenidoTodo"
                                value={formData.contenidoTodo}
                                onChange={(ev) => onChangeForm(ev)}
                            />
                        </div>

                        <div className="form-group d-grid gap-2 mt-3">
                            <button className='btn btn-outline-primary' disabled={!allOk()}>Save Todo</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
