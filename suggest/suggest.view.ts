namespace $.$$ {
	
	export class $hyoo_scout_suggest extends $.$hyoo_scout_suggest {

		name_bid() {
			if( !this.name().trim() ) return 'Обязательно'
			return ''
		}

		icon_bid() {
			if( !this.icon().trim() ) return 'Обязательно'
			return ''
		}

		descr_bid() {
			if( !this.descr().trim() ) return 'Обязательно'
			return ''
		}

		reason_bid() {
			if( !this.reason() ) return 'Обязательно'
			return ''
		}

		submit() {

			const subj = `Новая игра: ${ this.name() }`

			const data = {
				icon : this.icon() ,
				title : this.name() ,
				tags : {
					'Длительность' : [ this.Duration().options()[ this.duration() ] ] ,
					'Цель' : [ this.Reason().options()[ this.reason() ] ] ,
					'Возраст' : [ this.Age().options()[ this.age() ] ] ,
					'Реквизит' : this.stuff().trim().split( /\s*,\s*/g ).filter( Boolean ) ,
					'Подготовка' : [ this.Prep().options()[ this.prep() ] ] ,
					'Место' : [ this.Place().options()[ this.place() ] ] ,
				} ,
				content : this.descr() ,
			}
			
			const gist = new $mol_tree({ type : 'game' , sub : $mol_tree.fromJSON( data ).sub })

			const body = encodeURIComponent( gist.toString() + '\n' )

			window.open( `mailto:scout@hyoo.ru?subject=${ subj }&body=${ body }` , '_blank' )
		}

	}

}
